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
  "id": "sec-Proof-FTC",
  "level": "1",
  "url": "sec-Proof-FTC.html",
  "type": "Section",
  "number": "1.1",
  "title": "Justifying the Fundamental Theorem of Calculus",
  "body": " Justifying the Fundamental Theorem of Calculus  Just some introduction blahblahblah  "
},
{
  "id": "ch-wk5-activities",
  "level": "1",
  "url": "ch-wk5-activities.html",
  "type": "Chapter",
  "number": "2",
  "title": "Week 5 Activities",
  "body": " Week 5 Activities   The activities for this week will ask you to think about integrals in a different way.  When you completed all the tasks, format your work into a single pdf file and submit it in the corresponding assignment dropbox on Canvas.    "
},
{
  "id": "ch-wk6-activities",
  "level": "1",
  "url": "ch-wk6-activities.html",
  "type": "Chapter",
  "number": "3",
  "title": "Week 6 Activities",
  "body": " Week 6 Activities   The activities for this week will ask you to explore some strategies to evaluate trigonometric integrals.  When you completed all the tasks, format your work into a single pdf file and submit it in the corresponding assignment dropbox on Canvas.    "
},
{
  "id": "sec-Strategies-Integration",
  "level": "1",
  "url": "sec-Strategies-Integration.html",
  "type": "Section",
  "number": "4.1",
  "title": "What’s the \"best\" way to evaluate integrals?",
  "body": " What's the \"best\" way to evaluate integrals?   Back in the 1990s, an instructor placed the following integral question at the beginning of a final exam in an integral calculus course:  Imagine you were a student taking this exam, how would you try evaluating this integral?     Part (a): First approach   What is the first method you would try to evaluate this integral? Clearly state your reasoning for choosing this method as your first approach. Then carry out the integration using this method and show all steps clearly.     Part (b): Alternative approach   Now, come up with a different method that could also be used to evaluate the same integral. Briefly explain why you believe this alternative method is valid and likely to succeed. Then, evaluate the integral using this second method, again showing all steps clearly.     Part (c): Compare and reflect  When you completed the above tasks, expand the solution below and check your answer.   We can evaluate this integral using three methods we have learned in this class: they are -sub, trig sub, and partial fraction decomposition.     Using -sub: Let . Then .      Using Trig sub: Let . Then .   where .     Using Partial Fraction: Let and be two numbers. Note that   This implies that   We can determine that and .       Grade your work using the solution provided above.    "
},
{
  "id": "sec-Calculator-Integration",
  "level": "1",
  "url": "sec-Calculator-Integration.html",
  "type": "Section",
  "number": "4.2",
  "title": "Does calculators evaluate integrals \"smartly\"?",
  "body": " Does calculators evaluate integrals \"smartly\"?   There are some computer algebra system (CAS), including WolframAlpha , Symbolab , Integral Calculator , and so many others, to evaluate integrals.  As we saw in the previous task, there are multiple approaches to evaluate integrals, some of which may be easier than others. We know CAS is a pretty powerful tool to evaluate integrals, but does it always evaluate integrals using the most \"efficient\" way?  In this activity, you will compete with CAS to evaluate the following integral and see who will give the most elegant solution.     Part (a): Evaluation by hand   Evaluate the integral by hand. Write down each of your steps.   We can't split up the integral because of the square. Can we first simplify the integrant a bit?  Notice that we are working with trigonometric functions, and we know a lot of trigonometric identities that may be helpful to simplify the integrand...      Part (b): Evaluation by CAS   Go to Integral Calculator and input \"(sinx+cosx)^2\". Then click Go!  After the CAS evaluated the integral, scroll down on the Result and click \"Show steps\" to see how the CAS evaluated the integral.  Your task here is to briefly summarize the approach the CAS used to evaluate this integral (don't copy down the steps exactly. Instead, summarize what they did).     Part (c): Compare and Reflect   Compare your solution with the one CAS provided, write a short reflection that addresses the following prompts:   In your opinion, who do you think provided an easier and more elegant solution? Why?           "
},
{
  "id": "ch-wk9-activities",
  "level": "1",
  "url": "ch-wk9-activities.html",
  "type": "Chapter",
  "number": "5",
  "title": "Week 9 Activities",
  "body": " Week 9 Activities   The activities for this week will ask you to explore a topic in probability - continuous probability distribution.  When you completed all the tasks, format your work into a single pdf file and submit it in the corresponding assignment dropbox on Canvas.    "
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
