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
  "body": " The Accumulation Function   Let us first define what the accumulation function is! The definition is taken from your textbook page 326 (but your textbook call it the area function).    Let be a continuous function on an open interval and let be in . We define the accumulation function as     Using our knowledge of function notations, we know that the name of the accumulation function is , with the input of and the output of .    Part (a): An example   Let and . Then we can define the accumulation function here to be Compute , , , and . Then graph and indicate what these values represent on the graph.    Julie went through a similar example in one of the lecture videos in this week. If you get stuck or you want to confirm that you are on the right track, find that example.    Below is the graph of .   The Graph of       represents the area under the line from to . Graphically speaking, the area is 0, shown in the diagram below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of         Part (b): Meaning of the function   Functions have inputs and outputs. What does the input of the accumulation function, , represent and what does the output of the accumulation function, , represent? Be as specific as possible in your answer.  After you identified the meaning of the inputs and outputs, try to come up with a reason why we call this the accumulation function ?    Notice that the variable appears to be in the place of the upper limit of integration in the integral. This implies that the input of the accumulation function, , represents the upper limit of integration . It tells us how \"far\" we are integrating from the starting point of .  The output of the accumulation function, , represents the signed area under the curve of from to .  We call the accumulation function because it accumulates the signed area under the curve as we move from the starting point of to some later point . To make it more generalized, the accumulation function accumulates some quantity (and it doesn't have to be some area) between two points. We will look at a more generalized version of integrals in week 5 investigation.     Part (c): Structure of the formula   Notice that there are two variables in the accumulation function, and . Explain why we need both and to define the accumulation function?  For example, why wouldn't it make sense to define the accumulation function using ONLY as the variable?    Let's say we define the accumulation using only as the variable like this: Then how would we compute, let's say ? Well, we will need to replace ALL the 's with ... Does the expression make sense then?    The short answer is that and do two different jobs since there are two types of functions here:    is the input variable of the accumulation function, which represents the upper limit of integration of the integral.     is just a dummy variable we use to represent the input of the function .     If we define the accumulation function only using as an variable like Then the expression wouldn't make sense since it is impossible to evaluate this function.  As an example, would be Well... is a constant (the output of the function with an input of 2) so we are really integrating a number here (boring). Also, what is ... Well we know that the symbol here represents the infinitesimally small amount of change. But 2 is a constant and the value of 2 will never change... So doesn't really make sense mathematically.     When you complete the tasks...  Format your work as a single pdf file and submit it in this assignment dropbox on Canvas.  Remember that your work will be graded on your effort in completing the tasks and your understanding of concepts!   "
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
  "id": "sec-Accumulation-Function-3-4-2",
  "level": "2",
  "url": "sec-Accumulation-Function.html#sec-Accumulation-Function-3-4-2",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " The Graph of     "
},
{
  "id": "sec-Accumulation-Function-3-4-4",
  "level": "2",
  "url": "sec-Accumulation-Function.html#sec-Accumulation-Function-3-4-4",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " The Diagram of     "
},
{
  "id": "sec-Accumulation-Function-3-4-6",
  "level": "2",
  "url": "sec-Accumulation-Function.html#sec-Accumulation-Function-3-4-6",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " The Diagram of     "
},
{
  "id": "sec-Accumulation-Function-3-4-8",
  "level": "2",
  "url": "sec-Accumulation-Function.html#sec-Accumulation-Function-3-4-8",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " The Diagram of     "
},
{
  "id": "sec-Accumulation-Function-3-4-10",
  "level": "2",
  "url": "sec-Accumulation-Function.html#sec-Accumulation-Function-3-4-10",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " The Diagram of     "
},
{
  "id": "sec-Proof-FTC",
  "level": "1",
  "url": "sec-Proof-FTC.html",
  "type": "Section",
  "number": "2.1",
  "title": "Justifying THE Fundamental Theorem of Calculus",
  "body": " Justifying THE Fundamental Theorem of Calculus   It turns out that THE fundamental theorem of calculus says the integration and differentiation are inverse processes. That is, they will cancel each other. This relation (at least half of it) is captured in the Fundamental Theorem of Calculus, Part II, in your textbook page 326. I also included it below:   The Fundamental Theorem of Calculus   Let be a continuous function on an open interval and let be in . Then the definite integral of from to , aka the accumulation function, is an antiderivative of on . That is, Equivalently,     You may be wondering why differentiation will cancel the integration. Well your textbook provided a technical proof in this section using the fancy Squeeze Theorem. In this investigation, we will explore the (same) proof but in a more intuitive sense.   P.S.: If you get stuck, feel free to find the technical proof in the textbook for inspiration (or ask Richard for help\/hint).    Part (a): Starting Point - Set up the Expression   Since the Fundamental Theorem of Calculus involved some derivatives, so let's do a quick review on what derivatives represents!  Recall that derivatives represent the instantaneous rate of change of some function at a specific value, and we can find the instantaneous rate of change by taking the limit of the average rate of change of a function as the gap between the values are going to 0.  Set up an expression to represent by (1) first setting up a fraction to represent the average rate of change of the function (which function), and then (2) taking the limit of the fraction as the gap of the values approaches 0.   P.S.: I included some hints below to help you get started, as a good setup is important for the next two parts of the investigation. If you need help or have questions, make sure to reach out to Richard. Feel free to reach out to him too if you just want to confirm that you have the right setup.    If you need help on the symbolic definition of derivatives...  Below is the definition of derivative:   Let be a function differentiable at . Then the derivative of , denoted as , is defined by        If you need help on picking the function...  Recall there are two functions involved, the accumulation function, , and another function under which we are finding the area, . Based on the Fundamental Theorem of Calculus, which function are we taking the derivative of, or ?    The function we are taking the derivative of in the theorem is the accumulation function, . Then we can set up the expression by applying the limit definition of derivatives to the function as follows. Recall that the fraction, without the limit symbol, represents the average rate of change of the area under the curve from to . By taking the limit of the average rate of change as the gap from to approaches 0, we obtain the instantaneous rate of change, aka the derivative.     Part (b): Average Rate of Change of the Area   Let's focus on the average rate of change of the area. I coded a pretty picture below to help you visual the situation.       Simplify the fraction representing the average rate of change from to you came up with in part (a). Keep in mind that the goal for part (c) is to find the instantaneous rate of change so feel free to assume here is a small number.    If you need help on sorting out different area components...  Part of your expression in part (a) should contain something like and . What do they represent, in terms of color, in the graph provided?  Again, part of your expression in part (a) should contain something like . Which color in the graph represent this expression and how can we rewrite it using ONE definite integral?    If you need help on approximating the area of interest...  We learned some cool methods to approximate area under the curve in section 5.1. Let's use one of them to approximate the area of interest.  But... how many rectangles should I split up the area to? Recall that we assume is a very small number. That means using ONE skinny rectangle should suffice to apprixomate the area since is super very really small.  Also... which approximation method from section 5.1 should I use here... left-endpoint or right-endpoint approximation? Well Richard would say just pick one, following your heart.    Now let's focus on simplifying the average rate of change,   By looking at the pretty figure, we observe that    represents the total area of the green and orange region.     represents the area of the green region.   This implies that should give us the area of the orange region. Remember that is a super very really small number, so the orange region should be a super skinny strip whose area can approximated using a rectangle.  Recall the fancy left-endpoint and right-endpoint approximation we learned back in section 5.1? They seem like great methods to approximate the area of the skinny orange strip. The width of the orange strip is and the height is either or depending on which method you picked. It turns out it doesn't matter which one you picked as the height since is super very really small anyway. For demonstration, I will pick as the height of the orange strip. Then the average rate of change of the area is      Part (c): Instantaneous Rate of Change of the Area   Now that you have figured out the average rate of change of the area under the curve, what is the instantaneous rate of change (aka the derivative) of the accumulation function?  That is, what is the limit of the average rate of change you found in part (b) as approaches 0.    If you need help on evaluating the limit...  You should have an integral-free expression by now since you \"approximated\" the area using a skinny rectangle in part (b). Now that we have an expression to work with, what is the very first step you should do to evaluate the limit that your calculus 1 instructor told you, especially if you took calculus 1 with me.   If you play your cards right, the limit of the average rate of change, aka the derivative of the accumulation function, should be . What!!?? Differentiation undo the integration indeed!   Now that we figured out the average rate of change, the derivative is just the limit of the average rate of change we found in part (b) as approaches 0. That is, We proved it!    Julie also proved the FTC in one of her lecture videos. Feel free to check it out if you are more of a visual person!  Here is the video: https:\/\/media.pdx.edu\/media\/t\/1_82n44iqx    When you complete the tasks...  Take a break and celebrate that you worked through all the complicated symbols and proved the Fundamental Theorem of Calculus!  Then continue to the next assignment this week by exploring the proof of the corollary of the Fundamental Theorem of Calculus, which is the big theorem in section 5.4 that you will be using again and again and again in this class!   "
},
{
  "id": "thm-FTC",
  "level": "2",
  "url": "sec-Proof-FTC.html#thm-FTC",
  "type": "Theorem",
  "number": "2.1.1",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus   Let be a continuous function on an open interval and let be in . Then the definite integral of from to , aka the accumulation function, is an antiderivative of on . That is, Equivalently,    "
},
{
  "id": "def-derivatives",
  "level": "2",
  "url": "sec-Proof-FTC.html#def-derivatives",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  Let be a function differentiable at . Then the derivative of , denoted as , is defined by    "
},
{
  "id": "fig-Proof-FTC",
  "level": "2",
  "url": "sec-Proof-FTC.html#fig-Proof-FTC",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "    "
},
{
  "id": "sec-Proof-FTC-Corollary",
  "level": "1",
  "url": "sec-Proof-FTC-Corollary.html",
  "type": "Section",
  "number": "2.2",
  "title": "Justifying An Corollary of the Fundamental Theorem of Calculus",
  "body": " Justifying An Corollary of the Fundamental Theorem of Calculus   Well the Fundamental Theorem of Calculus, Part II, isn't the theorem we use a lot. Instead, we use the Fundamental Theorem of Calculus, Part I, a lot to help us evaluate definite integrals. This is actually a (most useful) corollary of the Fundamental Theorem of Calculus. The theorem is presented in your textbook page 318. I also included it below:    Assume that and that is continuous on . If is an antiderivative of on , then     Julie (and your textbook) provided a proof to this corollary by using the mean value theorem. We will approach things differently by proving this result using the accmulation function and the Fundamental Theorem of Calculus you proved in the previous investigation.   P.S.: The tasks below seem long but they are mostly procedures to follow. The goal here is to convince you the facts in each part are true.    Part (a): How \"different\" are all the antiderivatives of a function?   Let's take a step back a bit to section 5.3 about antiderivatives now. Recall the antiderivative of a function isn't unique (so a function can have a gazillon of different antiderivatives). But how different are the antiderivatives of a function?  Well we know the answer: All the antiderivatives of a function should differ by a constant ! This fact is being captured by the theorem in your textbook page 310 (I also included it below).   The General Antiderivative   Let be an antiderivative of on . Then every antiderivative on is of the form of for some constant .    This is also the reason why we always need to stick a everytime we find the indefinite integrals since the indefinite integral of a function is defined as its general antiderivative.  Your job in this part is to explain why all antiderivatives of a function only differ by a constant.    If you need help on the steps of the proof...  Well your textbook includes the proof for sure. Yet, your textbook simply quoted the mean value theorem. Try to explain what is really going mathematically rather than simply quoting the MVT. I also broke down the proof into the following steps for you to follow.    Since we want to figure out how different the antiderivatives of a function are, let's pick two arbitrary antiderivative of a function, called and .    Well we want to find the difference of them, so let's subtract them and name the difference . That is, we define .    What do we know about the difference, ? Well one thing we know is the derivative of for sure. Richard claimed that ... Why so?    Put on your calculus 1 thinking cap! What type of function will have the derivative of ? This will help you wrap up the argument.      The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!     Part (b): Prove the Corollary of the FTC   Let be a continuous function on . By , it seems like the theorem works with any antiderivative of . Well, we proved in the first investigation this week that the accumulation function, , is an antiderivative! So the theorem should work if we use in replace of in the theorem. We will prove instead and the actual proof will just be slightly different (but the idea remains!).  I will again code a pretty picture below to help you visualize the situation:       See that there is another value, , on the -axis. Symbolically speaking, it doesn't matter where is located but let's put it to the left of .  The reason why we needed an additional value of here is to work with the accumulation function. Let's quickly (re)define the accumulation function slightly bit different (simply because is being taken for something else).   Now your job in this part is to argue why the following equation is true by answering the following sub-questions:   Which area in the picture, in terms of color, is represented by . What about and ?    Rewrite using ONE definite integral. Then rewrite using another definite integral. Be careful about the limits of integration for both integrals.    Now simplify by condensing it to ONE single integral. If you play your cards right, the answer will be since the colors should match.       If you need help on condensing the integrals...  In the lecture video of section 5.2, Julie went through a couple properties of definite integrals. You will need two of them to condense the two definite integrals into . They are and Well the , , and represent different things so you probably want to sort out the symbols a bit.    Using the definition of the accumulation function in the prompt, we know that Using the properties of definite integrals, we have See that it doesn't matter where is located as I didn't use the figure for this symbol-pushing proof.     Part (c): Why doesn't the matter in definite integrals?   Recall we always need to add the at the end of the indefinite integrals since antiderivatives of a function isn't unique. But why doesn't we need to add the in the definite integrals when it comes to the area...  Well let's answer this question using a specific example. Let's define as a function such that . The goal is to find following the Fundamental Theorem of Calculus exactly as follows:    Find an antiderivative of and label it . Rather than leaving the generic , let's pick a specific non-zero value for the .    Find and  exactly . That is, don't put things into the calculator and get some decimals out of it. The goal here is to track where the constant goes so it won't help us if the constant is being absorbed into some weird decimals.    Now find . Observe what happens to the constant you picked while you do the subtraction.    Now that you played with an actual example, explain why we don't need to add the when evaluating the definite integrals.    We are given that . We know that Let's pick . Then the antiderivative here is By the FTC, we know that   See that the constant I picked, , is canceled in the subtraction!  To make it more generalized, you can imagine no matter what random you picked for the antiderivative, it will be subtracted out! No wonder why we don't put the when dealing with definite integrals!     When you complete the tasks...  Format your work for this investigation, together with the previous assignment in this week, as a single pdf file and submit it in this assignment dropbox on Canvas.  Remember that your work will be graded on your effort in completing the tasks and your understanding of concepts!   "
},
{
  "id": "cor-FTC",
  "level": "2",
  "url": "sec-Proof-FTC-Corollary.html#cor-FTC",
  "type": "Corollary",
  "number": "2.2.1",
  "title": "",
  "body": "  Assume that and that is continuous on . If is an antiderivative of on , then    "
},
{
  "id": "thm-GeneralAntiderivative",
  "level": "2",
  "url": "sec-Proof-FTC-Corollary.html#thm-GeneralAntiderivative",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "The General Antiderivative.",
  "body": " The General Antiderivative   Let be an antiderivative of on . Then every antiderivative on is of the form of for some constant .   "
},
{
  "id": "fig-Proof-FTC-Cor",
  "level": "2",
  "url": "sec-Proof-FTC-Corollary.html#fig-Proof-FTC-Cor",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": "    "
},
{
  "id": "sec-GorillaProblem",
  "level": "1",
  "url": "sec-GorillaProblem.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Great Gorilla Jump",
  "body": " The Great Gorilla Jump   Imagine this: a gorilla, suited up with a parachute, climbs to the top of a tall city building as part of a special wildlife training experiment. After a brief moment of hesitation, the gorilla bravely leaps off the edge. As the parachute deploys and air resistance kicks in, you, as one of the researchers on the ground, begin recording data to study how the gorilla's velocity changes over time. Using high-speed sensors, the team records the gorilla’s downward velocity every half-second as it falls. Note that the gorilla touched the ground just after 5 seconds. The recorded data is shown below.    Time (in seconds)  Velocity (in feet per second)    0  0    0.5  5    1.0  7    1.5  8    2.0  11    2.5  11.5    3.0  12    3.5  13    4.0  15.5    4.5  18    5.0  19        Part (a): How far did the gorilla travel?   Recall we can find the distance by multiplying the elapsed time and the velocity during the time. The formula is We are given a bunch of data points so let's find the total distance traveled as follows:  (1) Approximate how far the gorilla fell during each half-second interval and fill in the table below.      Time (in seconds)  Approximate distance traveled (in feet)    0 -- 0.5     0.5 -- 1.0     1.0 -- 1.5     1.5 -- 2.0     2.0 -- 2.5     2.5 -- 3.0     3.0 -- 3.5     3.5 -- 4.0     4.0 -- 4.5     4.5 -- 5.0       (2) Approximate the total distance the gorilla fell from the time he jumped off the building until the time he landed on the ground.    To figure out the distance, we need to know the elapsed time and the velocity during the time. The length of the elapsed time should be clear (hopefully). Yet the velocity isn't... Can we pick a (reasonable) velocity to approximate the distance?  By saying approximating the distance, there is no one right answer. Just make sure your approximation is reasonable.     Part (b): How to make the approximation better?   The assumption in part (a) here is that the distance traveled you computed is an approximation, not the exact distance traveled. There are two issues to address and your part (b) is to address these two issues:   Briefly describe why the result you got in part (a) is indeed an approximation. That is, how do you know the answer you got isn't the exact distance traveled.    How can you make the approximation better? What changes could you make to the way you collect the data to make the approximation better?       Think about the gravitational acceleration. Since the gorilla fell on the planet of earth, the acceleration remains a constant of 32 feet per second. What does it mean to the velocity? Does it make sense for the velocity to stay constant for 0.5 of a second?     When you complete the tasks...  You may be wondering how a gorilla falling is relevant to the integrals. A quick connection we can draw here is that the (indefinite) integral of velocity represents some sort of displacement. Since there is no turnaround in the motion, the distance traveled is the displacement (if you go easy on the sign). You will explore the connection in the next activity.  Go to the next activity and explore the structure of integrals using this gorilla falling scenario!   "
},
{
  "id": "sec-GorillaProblem-2-1-1",
  "level": "2",
  "url": "sec-GorillaProblem.html#sec-GorillaProblem-2-1-1",
  "type": "Table",
  "number": "3.1.1",
  "title": "",
  "body": "   Time (in seconds)  Velocity (in feet per second)    0  0    0.5  5    1.0  7    1.5  8    2.0  11    2.5  11.5    3.0  12    3.5  13    4.0  15.5    4.5  18    5.0  19    "
},
{
  "id": "sec-GorillaProblem-3-2-3-1",
  "level": "2",
  "url": "sec-GorillaProblem.html#sec-GorillaProblem-3-2-3-1",
  "type": "Table",
  "number": "3.1.2",
  "title": "",
  "body": "   Time (in seconds)  Approximate distance traveled (in feet)    0 -- 0.5     0.5 -- 1.0     1.0 -- 1.5     1.5 -- 2.0     2.0 -- 2.5     2.5 -- 3.0     3.0 -- 3.5     3.5 -- 4.0     4.0 -- 4.5     4.5 -- 5.0     "
},
{
  "id": "sec-Structure-Integrals",
  "level": "1",
  "url": "sec-Structure-Integrals.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Structure of Integrals",
  "body": " The Structure of Integrals   In the Great Gorilla Jump problem, you saw that we can figure out the total distance traveled by adding up a bunch of pieces of distance together, and we obtained each little piece of the distance by multiplying the respective velocity and the elapsed time. This is exactly what an integral is, that we are adding a bunch of the pieces together obtained by multiplying something together. This idea is called \" Adding-up-Pieces \".  In this activity, you will explain what each component in the Great Gorilla Jump problem represents and then generalize it to explore the structure of the definite integrals.   P.S.: This idea may seem similar to the Riemann sum you learned back in section 5.2. This is perfectly correct! The Adding-up-Pieces idea is like a generalized version of the Riemann sum in the sense that we don't only apply this idea to just finding the area of a bunch of rectangles or the area under the curve.    Part (a): Math up the Great Gorilla Jump Problem!   Let's call the elapsed time (and it is typically 0.5 seconds) and the velocity of the gorilla at a certain point, where is the index to indicate which piece we are referring to. If we call each piece of the distance , then it can be obtained by You also found out that we can find the total distance by adding up the pieces together. By using the fancy sigma notation you learned before, the total distance traveled is where denotes the number of pieces.  We know that the approximation is better and better if we recorded more and more velocity as that will force the elapsed time to become smaller and smaller. Symbolically speaking, the total distance travel can be computed by   Now let's switch our attention to the definite integrals. Hypothetically speaking let's say we knew the velocity function, . Then by section 5.6, we know that the total distance traveled is Note that there is no turnaround so the displacement and the distance traveled should be the same (if we are less picky about the sign).  Wow that's a long preamble..., and here is your task! We have two expressions to represent the same thing (the total distance) so we can equate them. Explain what each part of the integral means using this equation. To be more explicit, what does the following symbols represent. Be as specifically as possible.                      Part (b): General Structure of Integrals   The general structure of integrals is like the one below (you can find a similar version in our textbook in section 5.2): From the Great Gorilla Jump problem, we got the distance by (1) multiplying, and then (2) adding. By staring at the structure of a generic definite integral, ,what is it that are being multiplied and what is it that is being added? Which symbol (or the lack of symbol) represents the multiplication and which symbol represents the addition?     When you complete the tasks...  Now that you have a better understanding of the structure and the meaning of the definite integrals, we can make sense of other applications of integrals easier.  Go to the next activity and explore a famous application of integration in physics and engineering.   "
},
{
  "id": "sec-Application-Work",
  "level": "1",
  "url": "sec-Application-Work.html",
  "type": "Section",
  "number": "3.3",
  "title": "A Physics and Engineering Application -- Work",
  "body": " A Physics and Engineering Application -- Work   You may have heard of a measurement called work before, as it measures the transfer of energy by a force acting on an object as it is displaced. In a nutshell, the work ( ) can be computed by multiplying the force ( ) with the displacement ( ) together, like this Notice that we can obtain the work if we know the (constant) force applied to an object and the displacement.  But there is no guarantee that the force applied to an object remains constant for the entire duration of the displacement... So the above formula is really limited in the sense that we don't know exactly what the value of is (since it varies). Thankfully we know calculus now and calculus will come to our rescue (calculus is a study that deals with changes)!  In this activity, your task is to explain why the calculus version of the work formula appears the way it is and apply it to an application.   P.S.: You can find more information about the work done on an object in section 6.5 in our textbook. While this isn't a required section in this class, you will definitely encounter this type of application if you are a physics and\/or an engineering major.    Part (a): Why does the formula look like this?   In most calculus textbooks (including ours), work is being defined as   The work done by a variable force moving an object along a line from to in the direction of the force is      Ummm but why can we obtain the work by integrating the force... Explain why this formula makes sense to your friends as if they just finished the algebra-based physics and didn't know as much calculus as you do.    It is very tempting to say that this is because the derivative of work is force. But this isn't convincing in the sense that more explanation is needed to justify why the derivative of work is force. Without much calculus background, this won't make sense (and it still doesn't make sense to Richard despite his excellency in math but knew practically nothing in Newtonian physics... He didn't have a great calc-based physics professor when he was a freshman in undergrad).  But recall integrals is really about adding up pieces together obtained by multiplication! Your friends did know about the concept of work and adding stuff together!     Part (b): Put the formula to use!   How much work is required to move an object from to , measured in meters, in the presence of a force, measured in Newtons, , given by acting along the -axis?    We really have two formulas here to calculate work: the short-and-easy and the slightly complicated calculus version. How do we know which one we should use here... Well a question that helps you decide is... Is the force in this scenario a constant during the entire displacement?     When you complete the tasks...  Format your work for this investigation, together with other two short investigations for this week, as a single pdf file and submit it in this assignment dropbox on Canvas.  Remember that your work will be graded on your effort in completing the tasks and your understanding of concepts!   "
},
{
  "id": "def-Work-Calculus",
  "level": "2",
  "url": "sec-Application-Work.html#def-Work-Calculus",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  The work done by a variable force moving an object along a line from to in the direction of the force is    "
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
