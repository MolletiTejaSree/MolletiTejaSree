import React, { useState } from "react";
import courseimg_1 from "../../assets/images/one.jfif";
import courseimg_2 from "../../assets/images/two.jfif";
import courseimg_3 from "../../assets/images/three.jfif";
import courseimg_4 from "../../assets/images/four.jfif";
import Course_show from "./Course_grp";
function Course(){
    let [data,setData]=useState([
        {
            img:courseimg_1,
            head:"REACT",
            P_grph:"It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files. The Create React App uses ESLint to test and warn about ..."
            
        },
       
        {
            img:courseimg_2,
            head:"ANGULAR",
            P_grph:"A component-based framework for building scalable web applications · A collection of well-integrated libraries that cover a wide variety of features, including ..."
        },
        {
            img:courseimg_3,
            head:"JAVA",
            P_grph:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with ..."

        },
        {
            img:courseimg_4,
            head:"PYTHON",
            P_grph:"Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share"
        },
    ])
    
    return(
        <div className="container mt-4">
            <div className="row">
                {
                    data.map((store,setStore)=>{
                        return(
                            <div className="col-sm-3">
                                <Course_show image={store.img} value={store.head} title={store.P_grph}/>
                                

                                </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
export default Course;