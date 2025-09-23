# Joan Garcés - Cybersecurity Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### [View Live Demo](https://portfolio-website-delta-one-98.vercel.app/)

A dynamic and personal web portfolio created to demonstrate skills in offensive cybersecurity, software development, and problem-solving through projects and practical experience.

![gif](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWkzcWwybW1xMzhpNGFpemlyMXh6bm51Y3h6bTdkeDFtM2Rzc2V3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fOsYC0EPkvBbLH40Gb/giphy.gif)

---

## About This Project

This project started as a React template and has been transformed into a fully functional and stylized personal portfolio with a "hacker" theme. The main goal is to serve as an interactive cover letter for recruiters and industry professionals, showcasing not only completed projects but also frontend development skills.

The homepage features a "Matrix"-style animated background and a profile picture with a "glitch" effect to maintain a cohesive aesthetic. The projects section connects directly to the GitHub API, securely fetching and displaying my public repositories in real-time.

---

## Technologies Used

* **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3
* **Deployment:** Vercel (with CI/CD)
* **Version Control:** Git & GitHub
* **APIs:** GitHub REST API

---

## Key Features

* **Animated Background:** "Matrix"-style code rain for a complete thematic immersion.
* **Dynamic Projects:** The portfolio section consumes the GitHub API to automatically display public repositories.
* **Secure API Key:** Use of environment variables on Vercel to protect the GitHub Personal Access Token in production.
* **Visual Effects:** Custom "glitch" effect for the profile picture and a terminal-inspired user interface.
* **Responsive Design:** Adaptable to different screen sizes, from mobile to desktop.

---

## Local Setup

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/bomdiaola/portfolio-website.git](https://github.com/bomdiaola/portfolio-website.git)
    ```
2.  **Install dependencies**
    ```sh
    npm install
    ```
3.  **Set up your environment variables**
    Create a `.env` file in the project root and add your GitHub API Key:
    ```
    REACT_APP_GITHUB_TOKEN=ghp_YourTokenHere
    ```
4.  **Start the development server**
    ```sh
    npm start
    ```

---

## Acknowledgements

* This project was built upon the template created by **Duerme**.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
