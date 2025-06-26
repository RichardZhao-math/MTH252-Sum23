var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-Accumulation-Function",
  "level": "1",
  "url": "sec-Accumulation-Function.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Accumulation Function",
  "body": " The Accumulation Function   Let us first define what the accumulation function is! The definition is taken from your your textbook page 326 (but your textbook call it the area function).    Let be a continuous function on an open interval and let be in . We define the accumulation function as     Using our knowledge of function notations, we know that the name of the accumulation function is , with the input of and the output of .    Part (a): An example   Let and . Then we can define the accumulation function here to be Compute , , , and . Then graph and indicate what these values represent on the graph.    Julie went through a similar example in one of the lecture videos in this week. If you get stuck or you want to confirm that you are on the right track, find that example.      Part (b): Meaning of the function   Functions have inputs and outputs. What does the input of the accumulation function, , represent and what does the output of the accumulation function, , represent? Be as specific as possible in your answer.  After you identified the meaning of the inputs and outputs, try to come up with a reason why we call this the accumulation function ?      Part (c): Structure of the formula   Notice that there are two variables in the accumulation function, and . Explain why we need both and to define the accumulation function?  For example, why wouldn't it make sense to define the accumulation function using ONLY as the variable?    Let's say we define the accumulation using only as the variable like this: Then how would we compute, let's say ? Well, we will need to replace ALL the 's with ... Does the expression make sense then?      When you complete the tasks...  Format your work as a single pdf file and submit it in this assignment dropbox on Canvas.  Remember that your work will be graded on your effort in completing the tasks and your understanding of concepts!   "
},
{
  "id": "def-AccumulationFunction",
  "level": "2",
  "url": "sec-Accumulation-Function.html#def-AccumulationFunction",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  Let be a continuous function on an open interval and let be in . We define the accumulation function as    "
},
{
  "id": "ch-wk3-activities",
  "level": "1",
  "url": "ch-wk3-activities.html",
  "type": "Chapter",
  "number": "2",
  "title": "Week 3 Activities",
  "body": " Week 3 Activities   The activities will be available on Monday, July 7 and due on Sunday, July 13 .      "
},
{
  "id": "ch-wk5-activities",
  "level": "1",
  "url": "ch-wk5-activities.html",
  "type": "Chapter",
  "number": "3",
  "title": "Week 5 Activities",
  "body": " Week 5 Activities   The activities will be available on Monday, July 21 and due on Sunday, July 27 .     "
},
{
  "id": "ch-wk6-activities",
  "level": "1",
  "url": "ch-wk6-activities.html",
  "type": "Chapter",
  "number": "4",
  "title": "Week 6 Activities",
  "body": " Week 6 Activities   The activities will be available on Monday, July 28 and due on Sunday, August 3 .     "
},
{
  "id": "ch-wk8-activities",
  "level": "1",
  "url": "ch-wk8-activities.html",
  "type": "Chapter",
  "number": "5",
  "title": "Week 8 Activities",
  "body": " Week 8 Activities   The activities will be available on Monday, August 11 and due on Sunday, August 17 .      "
},
{
  "id": "ch-wk9-activities",
  "level": "1",
  "url": "ch-wk9-activities.html",
  "type": "Chapter",
  "number": "6",
  "title": "Week 9 Activities",
  "body": " Week 9 Activities   The activities will be available on Monday, August 18 and due on Sunday, August 24 .     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
