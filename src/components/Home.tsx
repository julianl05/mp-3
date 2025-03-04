import styled from "styled-components";



export default function Home(){
    return (
        <main>
            <h3>Home</h3>
            <div id="profile-container">
                <div id="profile-pic-container">
                    <img id="profile-pic" src="src/images/profile.JPG" alt="Profile Picture"/>
                </div>
                <div id="about-container">
                    <p>Hi! My name is Julian Lim Jun Ren and I am currently a junior studying computer science at Boston University. 
                        Right now, my foremost career interest is web application development, as I hope to build software that will be used to impact the real world. I'm also deeply passionate about the video game industry :D.
                    </p>
                </div>
            </div>
            <p id="intro-text">On this website, you'll find the contents of my resume displayed in a more orderly manner, its section headers split into their own individual pages. 
                This website also serves as a practice in building a responsive website viewable on all manners of devices.
            </p>
        </main>
    );
}