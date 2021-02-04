This translation API here is an static API where if the target language as well as the text is provided explicitly in the code .
the resultant output would be the translated text .

using the application
clone the file into a folder 
ctrl+T/command line 
npm install

open the code files in your editor 

give explicity to:"",body{{text:" "}}

for checking the routing method used install postman 

method =POST
url=http://localhost:8080/translate
header{key{content-type},value{application/json}}

upon sending the request from the url the given provided is the language passed as well as the text provided in the input.
but since we are using a free api for translation we get error code 40036.

some of the screen shot has been added below for your reference.
