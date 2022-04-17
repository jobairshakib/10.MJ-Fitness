import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1 className='blogs-title text-center mt-5'>Blogs</h1>
            <div className='blogs-container'>
                <div className='blogs-card'>
                    <h3>Difference between Authorization and Authentication.</h3>
                    <p>Ans: Authentication is a process of verifying and confirming a user information like id, password  etc if he/she user or not. And on the other hand, Determining what permission do a user have is called Authorization. This process is done after the authentication process.
                    </p>
                </div>
                <div className='blogs-card'>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Ans:Firebase Authentication is easy to use , it provides backend services,and It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        There are also other Firebase Alternatives like Parse, Back4App,
                        NativeScript, Flutter etc.
                    </p>
                </div>
                <div className='blogs-card'>
                    <h3>What other services does firebase provide other than authentication?</h3>
                    <p>Ans: Firebase is not used only for Authentication . There are  many various services which Firebase Provides. like, Cloud Firestore,
                    Cloud Functions,
                    Authentication,
                    Hosting,
                    Cloud Storage,
                    Google Analytics,
                    Predictions,
                    Cloud Messaging,
                    Dynamic Links,
                    Remote Config</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;