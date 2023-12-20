
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from PyPDF2 import PdfReader


from tempfile import NamedTemporaryFile



from openai import OpenAI


client = OpenAI(api_key="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")



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


origins = ["*"]  

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)


def extract_text_from_pdf(pdf_file):
    text = ""
    reader = PdfReader(pdf_file)
    number_of_pages = len(reader.pages)
    for page_number in range(number_of_pages):
        page = reader.pages[page_number]
        text = text + page.extract_text()     

    return text

@app.post("/extract_text")
async def extract_text(file: UploadFile = File(...)):
    temp_pdf_path = None
    try:
        with NamedTemporaryFile(delete=False) as temp_pdf:
            temp_pdf.write(file.file.read())
            temp_pdf_path = temp_pdf.name
            text = extract_text_from_pdf(temp_pdf)
            return JSONResponse(content={'text': text}, status_code=200)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if temp_pdf_path:
            # Cleanup temporary file
            temp_pdf.close()

@app.get("/get_categories/{question}")
def get_categories(question: str):

    category  = determine_blooms_level(question)

    return {"category": category}




@app.post("/generate_question/")
def get_categories(text: str):

    response = client.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt="Generate the multiple choice question from  this topic:\n {text}\nOptions"
    )


    return JSONResponse(content={'data:': response.choices[0].text}, status_code=200)