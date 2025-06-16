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
  "id": "sec-Strategies-Integration",
  "level": "1",
  "url": "sec-Strategies-Integration.html",
  "type": "Worksheet",
  "number": "1.1",
  "title": "Strategies to Evaluate Integrals",
  "body": " Strategies to Evaluate Integrals   The problem in this activity is inspired by the paper presentating a strategy for indefinite integration by Alan Schoenfeld.  The reference is: Schoenfeld, A. H. (1978). Presenting a strategy for indefinite integration. The American Mathematical Monthly, 85 (8), 673-678.    Back in the 1990s, an instructor placed the following integral at the beginning of a final exam in an integral calculus course:     Imagine you were a student taking this exam. Based on your current knowledge, what is the first method you would try to evaluate this integral? Clearly state your reasoning for choosing this method as your first approach. Then, carry out the integration using this method and show all steps clearly.    Now, come up with a different method that could also be used to evaluate the same integral. Briefly explain why you believe this alternative method is valid and likely to succeed. Then, evaluate the integral using this second method, again showing all steps clearly.   When you finished the above question, expand the solution below and check your answer.   There are actually three methods to solve this integral. They are -sub, trig sub, and particial fraction decomposition.     Using -sub: Let . Then .      Using Trig sub: Let . Then .   where .     Using Partial Fraction: Let and be two numbers. Note that   This implies that   We can determine that and .      "
},
{
  "id": "sec-Strategies-Integration-2",
  "level": "2",
  "url": "sec-Strategies-Integration.html#sec-Strategies-Integration-2",
  "type": "Note",
  "number": "1.1.1",
  "title": "",
  "body": " The problem in this activity is inspired by the paper presentating a strategy for indefinite integration by Alan Schoenfeld.  The reference is: Schoenfeld, A. H. (1978). Presenting a strategy for indefinite integration. The American Mathematical Monthly, 85 (8), 673-678.  "
},
{
  "id": "sec-Strategies-Integration-4",
  "level": "2",
  "url": "sec-Strategies-Integration.html#sec-Strategies-Integration-4",
  "type": "Worksheet Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " Imagine you were a student taking this exam. Based on your current knowledge, what is the first method you would try to evaluate this integral? Clearly state your reasoning for choosing this method as your first approach. Then, carry out the integration using this method and show all steps clearly.  "
},
{
  "id": "sec-Strategies-Integration-5",
  "level": "2",
  "url": "sec-Strategies-Integration.html#sec-Strategies-Integration-5",
  "type": "Worksheet Exercise",
  "number": "1.1.2",
  "title": "",
  "body": " Now, come up with a different method that could also be used to evaluate the same integral. Briefly explain why you believe this alternative method is valid and likely to succeed. Then, evaluate the integral using this second method, again showing all steps clearly.  "
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
