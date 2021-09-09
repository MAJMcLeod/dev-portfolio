import utils from '../styles/utils.module.css'
// importing stylesheets

let Experience = () => {
      // initializing a functional component

    let eduInfo = [
        {
            key: 1,
            campus: "HyperionDev",
            date: "April 2021 - July 2021",
            title: "Full-Stack Web Developer",
            description: "Attended a year after highschool, the bootcamp taught all the essential requirements to become a Junior Web-Dev. The course included JavaScript, CSS, HTML, MongoDB, Agile Development, NodeJS, React, NextJS, Express and Mongoose.",
            location: "Capetown"
        },
        {
            key: 2,
            campus: "St Andrews College",
            date: "January 2016 - January 2020",
            title: "National Senior Certificate",
            description: "Attended highschool here where I partook in many cultural activities such as Speakers Society, Wind Orchestra and Choir. More notably I took subject IT where we learned Java, SQL, Database Normalization and OOP concepts graduating with 3 distinctions and a 90% for my IT prac exam.",
            location: "Grahamstown"
        }
    ]

    let workInfo = [
        {
            key: 1,
            campus: "Mullenlowe Advertising",
            date: "August 2019 - June 2019",
            title: "Intern",
            description: "Learned the ins and outs of the advertisement pipeline and spent extensive time with the design and brand teams taking part in an assortment of projects.",
            location: "Capetown"
        },
        {
            key: 2,
            campus: "Bewilder Animation",
            date: "June 2019 - June 2019",
            title: "Intern",
            description: "Learned about the animation studio pipeline and worked closely with 2d and 3d animators. Gained a deeper understanding about 3d animation which inspired me to consider this field professionally.",
            location: "Capetown"
        },
        {
            key: 3,
            campus: "Theatre Cafe",
            date: "July 2018 - July 2019",
            title: "Family Business",
            description: "Offered assistance at the established cafe regularly in all roles. Also during the Grahamstown National Arts Festivals with a second cafe in the Monument with peak festival business.",
            location: "Grahamstown"
        },
        {
            key: 4,
            campus: "School Marketing",
            date: "July 2020 - July 2021",
            title: "Animator",
            description: "Worked closely with the school marketing department to produce 3d animations and assets for use in marketing presentations and media. This allowed me to gain useful insight into marketing and digital media.",
            location: "Grahamstown"
        }
    ]
    return (
        <div className={utils.experience_outer}>
            {/* classes used to style components */}
            <div className={utils.experience_middle}>
                <div className={utils.experience_inner}>
                    <h1>Experience</h1>
                    <div className={utils.experience_container}>
                        <h2 className={utils.edu}>Education</h2>

                        {eduInfo.map(data =>
                            <div className={utils.experience_grid_outer} key={data.key}>
                                <div className={utils.experience_grid_inner}>
                                    <div className={utils.grid_inner_1}>
                                        <h2>{data.campus}</h2>
                                        <p>{data.date}</p>
                                    </div>

                                    <div className={utils.grid_inner_2}>
                                        <h3>{data.title}</h3>
                                        <p>{data.description}</p>
                                        <p className={utils.location}>{data.location}</p>

                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    <div className={utils.experience_container}>
                        <h2 className={utils.edu}>Career</h2>

                        {workInfo.map(data =>
                            <div className={utils.experience_grid_outer} key={data.key}>
                                <div className={utils.experience_grid_inner}>
                                    <div className={utils.grid_inner_1}>
                                        <h2>{data.campus}</h2>
                                        <p>{data.date}</p>
                                    </div>

                                    <div className={utils.grid_inner_2}>
                                        <h3>{data.title}</h3>
                                        <p>{data.description}</p>
                                        <p className={utils.location}>{data.location}</p>

                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;