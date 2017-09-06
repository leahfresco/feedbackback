# FeedBackBack

FeedBackBack is a web application that allows a user to log in with their Google account, purchase credits to create surveys, send surveys to their customers with a yes or no question and see the replies for all their surveys in a dashboard.

[Visit the deployed site!](https://feedbackback.herokuapp.com/)

## Contents
* [Tech Stack](#tech)
* [Features](#feats)
* [About Me](#about)

## <a name="tech"></a>Tech Stack
Node, Express, Javascript, MongoDB, React/Redux, Materialize, Heroku
**APIs:** Google OAuth, Stripe, SendGrid

## <a name="feats"></a>Features

###### Step 1: Log In with Google
Signing in is easy with Google login authentication. Feedbackback gets only access to your email address.


###### Step 2: Create an email survey
Iterating quickly on a product requires user feedback on a frequent basis. A survey on FeedBackBack is meant to solicit feedback from a list of email recipients. Users can title an email campaign, decide on an email subject line, ask users their burning questions and input a list of email recipients.

###### Review screen
A secondary view of the email is necessary to ensure that users can double check their campaign before sending the emails. It's easy to back and edit any typos before clicking the final send button.

###### Step 3: Email recipients receive emails inquiring for feedback and click 'yes' or 'no'
Each email recipients' response is recorded to the MongoDB to ensure there are no duplicate responses.

###### Step 4: User sees statistics for each email survey campaign
Users can see the number of 'yes' and 'no' responses to each of the email campaigns to understand what their users are thinking.


## <a name="about"></a>About Me
My name is [Leah Yukelson](https://leahyukelson.github.io/) and I am located in San Francisco, CA. I studied business information systems at Cal Poly SLO with an emphasis in computer science. After graduation, I went to work at Macy's doing search marketing; managing multi-million dollar budgets and making strategic marketing choices. While being on the business-facing side of advertising, I became more interested in how the technology works. I loved the logic problem solving aspect of my computer science classes at Cal Poly and decided to dive back into programming by attending Hackbright Academy. I am currently interested in combining my interest in ad technology with full-stack web development.