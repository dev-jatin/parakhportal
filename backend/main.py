
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

def determine_blooms_level(question):
   
    question_lower = question.lower()

   
    categories = {
        'Remembering': ['recall', 'define', 'list', 'identify', 'memorize', 'state', 'name', 'describe', 'show', 'find', 'quote', 'recite', 'review'],
        'Understanding': ['understand', 'explain', 'summarize', 'interpret', 'paraphrase', 'classify', 'discuss', 'recognize', 'exemplify', 'indicate', 'clarify', 'illustrate'],
        'Applying': ['apply', 'solve', 'use', 'demonstrate', 'illustrate', 'implement', 'execute', 'carry out', 'employ', 'perform', 'practice', 'engage'],
        'Analyzing': ['analyze', 'break down', 'classify', 'compare', 'differentiate', 'dissect', 'examine', 'survey', 'inquire', 'organize', 'deconstruct', 'query'],
        'Evaluating': ['evaluate', 'judge', 'assess', 'critique', 'justify', 'appraise', 'rate', 'validate', 'prioritize', 'recommend', 'argue', 'decide'],
        'Creating': ['create', 'design', 'compose', 'generate', 'construct']
    }

   
    keyword_frequencies = {category: 0 for category in categories}
    last_category = None
    for word in question_lower.split():
    
        for category, keywords in categories.items():
            if word in keywords:
                keyword_frequencies[category] += 1
                last_category = category

    max_frequency = max(keyword_frequencies.values())
    most_frequent_categories = [category for category, freq in keyword_frequencies.items() if freq == max_frequency]

    if len(most_frequent_categories) == 1:
        return most_frequent_categories[0]
    else:
        return last_category if last_category in most_frequent_categories else "Unknown"




app = FastAPI()


app = FastAPI()

origins = ["*"]  

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get_categories/{question}")
def get_categories(question: str):

    category  = determine_blooms_level(question)

    return {"category": category}

