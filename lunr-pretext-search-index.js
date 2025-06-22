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
  "body": " The Accumulation Function   Let us first define what the accumulation function is!    Let be a continuous function on an open interval and let be in . We define the accumulation function as   Using our knowledge of function notations, we know that the name of the accumulation function is , with the input of and the output of .      Part (a): An example   Let and . Then we can define the accumulation function here to be Compute , , , and . Then graph and indicate what these values represent on the graph.    Below is the graph of .   The Graph of         Part (b): Meaning of the function   Functions have inputs and outputs. What does the input of the accumulation function, , represent? What does the output of the accumulation function, , represent? Be as specific as possible in your answer.  After you identified the meaning of the inputs and outputs, try to come up with a reason why we call this the accumulation function ?    Notice that the variable appears to be in the place of the upper limit of integration in the integral. This implies that the input of the accumulation function, , represents the upper limit of integration . It tells us how \"far\" we are integrating from the starting point of .  The output of the accumulation function, , represents the signed area under the curve of from to .  We call the accumulation function because it accumulates the signed area under the curve as we move from the starting point of to some later point .     Part (c): Structure of the formula   Notice that there are two variables in the accumulation function, which are and . Explain why we need both and to define the accumulation function?  For example, why wouldn't it make sense to define the accumulation function using ONLY as the variable?    Let's say we define the accumulation using only as the variable like this: Then how would we compute, let's say ? We will need to replace ALL the 's with ... Does the expression make sense?    "
},
{
  "id": "def-AccumulationFunction",
  "level": "2",
  "url": "sec-Accumulation-Function.html#def-AccumulationFunction",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  Let be a continuous function on an open interval and let be in . We define the accumulation function as   Using our knowledge of function notations, we know that the name of the accumulation function is , with the input of and the output of .   "
},
{
  "id": "fig-tikz",
  "level": "2",
  "url": "sec-Accumulation-Function.html#fig-tikz",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " The Graph of     "
},
{
  "id": "sec-Proof-FTC",
  "level": "1",
  "url": "sec-Proof-FTC.html",
  "type": "Section",
  "number": "2.1",
  "title": "Justifying the Fundamental Theorem of Calculus",
  "body": " Justifying the Fundamental Theorem of Calculus  Just some introduction blahblahblah  "
},
{
  "id": "ch-wk5-activities",
  "level": "1",
  "url": "ch-wk5-activities.html",
  "type": "Chapter",
  "number": "3",
  "title": "Week 5 Activities",
  "body": " Week 5 Activities   The activities for this week will ask you to think about integrals in a different way.  When you completed all the tasks, format your work into a single pdf file and submit it in the corresponding assignment dropbox on Canvas.    "
},
{
  "id": "ch-wk6-activities",
  "level": "1",
  "url": "ch-wk6-activities.html",
  "type": "Chapter",
  "number": "4",
  "title": "Week 6 Activities",
  "body": " Week 6 Activities   The activities for this week will ask you to explore some strategies to evaluate trigonometric integrals.  When you completed all the tasks, format your work into a single pdf file and submit it in the corresponding assignment dropbox on Canvas.    "
},
{
  "id": "sec-Strategies-Integration",
  "level": "1",
  "url": "sec-Strategies-Integration.html",
  "type": "Section",
  "number": "5.1",
  "title": "What’s the \"best\" way to evaluate integrals?",
  "body": " What's the \"best\" way to evaluate integrals?   Back in the 1990s, an instructor placed the following integral question at the beginning of a final exam in an integral calculus course:  Imagine you were a student taking this exam, how would you try evaluating this integral?     Part (a): First approach   What is the first method you would try to evaluate this integral? Clearly state your reasoning for choosing this method as your first approach. Then carry out the integration using this method and show all steps clearly.     Part (b): Alternative approach   Now, come up with a different method that could also be used to evaluate the same integral. Briefly explain why you believe this alternative method is valid and likely to succeed. Then, evaluate the integral using this second method, again showing all steps clearly.     Part (c): Compare and reflect  When you completed the above tasks, expand the solution below and check your answer.   We can evaluate this integral using three methods we have learned in this class: they are -sub, trig sub, and partial fraction decomposition.     Using -sub: Let . Then .      Using Trig sub: Let . Then .   where .     Using Partial Fraction: Let and be two numbers. Note that   This implies that   We can determine that and .       Grade your work using the solution provided above. Then write a short reflection that addresses the following prompts:   The instructor put this integral question in the beginning of the final exam, hoping to bolster students' confidence. Do you think their goal is accomplished using your first approach?           "
},
{
  "id": "sec-Calculator-Integration",
  "level": "1",
  "url": "sec-Calculator-Integration.html",
  "type": "Section",
  "number": "5.2",
  "title": "Does calculators evaluate integrals \"smartly\"?",
  "body": " Does calculators evaluate integrals \"smartly\"?   There are some computer algebra system (CAS), including WolframAlpha , Symbolab , Integral Calculator , and so many others, to evaluate integrals.  As we saw in the previous task, there are multiple approaches to evaluate integrals, some of which may be easier than others. We know CAS is a pretty powerful tool to evaluate integrals, but does it always evaluate integrals using the most \"efficient\" way?  In this activity, you will compete with CAS to evaluate the following integral and see who will give the most elegant solution.     Part (a): Evaluation by hand   Evaluate the integral by hand. Write down each of your steps.   We can't split up the integral because of the square. Can we first simplify the integrant a bit?  Notice that we are working with trigonometric functions, and we know a lot of trigonometric identities that may be helpful to simplify the integrand...      Part (b): Evaluation by CAS   Go to Integral Calculator and input \"(sinx+cosx)^2\". Then click Go!  After the CAS evaluated the integral, scroll down on the Result and click \"Show steps\" to see how the CAS evaluated the integral.  Your task here is to briefly summarize the approach the CAS used to evaluate this integral (don't copy down the steps exactly. Instead, summarize what they did).     Part (c): Compare and Reflect   Compare your solution with the one CAS provided. Then write a short reflection that addresses the following prompts:   In your opinion, who do you think provided an easier and more elegant solution? Why?           "
},
{
  "id": "ch-wk9-activities",
  "level": "1",
  "url": "ch-wk9-activities.html",
  "type": "Chapter",
  "number": "6",
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
