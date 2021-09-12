function printArrayWithDelimiter(arrayOfStrings, delimiter){
    return console.log(arrayOfStrings.join(`${delimiter}`))
}
printArrayWithDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-')
printArrayWithDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
)