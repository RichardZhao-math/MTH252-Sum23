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
  "type": "Section",
  "number": "1.1",
  "title": "Strategies to Evaluate Integrals",
  "body": " Strategies to Evaluate Integrals  We have learned a lot of techniques for evaluating integrals in this term.  In this activity, you will explore two specific integrals and reflect on the process.   What's the \"best\" way to evaluate integrals?  Back in the 1990s, an instructor placed the following integral at the beginning of a final exam in an integral calculus course:   Imagine you were a student taking this exam, how would you try evaluating this integral?   First approach to evaluate this integral   What is the first method you would try to evaluate this integral? Clearly state your reasoning for choosing this method as your first approach. Then carry out the integration using this method and show all steps clearly.     Alternative approach to evaluate this integral   Now, come up with a different method that could also be used to evaluate the same integral. Briefly explain why you believe this alternative method is valid and likely to succeed. Then, evaluate the integral using this second method, again showing all steps clearly.     When you finished the above question, expand the solution below and check your answer.   There are (at least) three methods to solve this integral. They are -sub, trig sub, and partial fraction decomposition.     Using -sub: Let . Then .      Using Trig sub: Let . Then .   where .     Using Partial Fraction: Let and be two numbers. Note that   This implies that   We can determine that and .        Compare and reflect   Did your answer(s) match with the solution?      Does calculators evaluate integrals \"smartly\"?  There are some computer algebra system, including WolframAlpha , Symbolab , Integral Calculator , and so many others.   "
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
