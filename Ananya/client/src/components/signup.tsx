import React from 'react';

const SignUp: React.FC = () => {
    return (
        <section className="testimonial py-5" id="testimonial">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 py-5 bg-primary text-white text-center ">
                        <div className=" ">
                            <div className="card-body">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1604/1604518.png"
                                    style={{ width: "30%" }}
                                    alt="Registration"
                                />
                                <h2 className="py-3" style={{fontFamily:"cursive"}}>Fly High</h2>
                                <p>
                                    Welcome! Register to Fly High now.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 py-5 border">
                        <h4 className="pb-4">Please fill with your details</h4>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input
                                        id="Full Name"
                                        name="Full Name"
                                        placeholder="Full Name"
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input
                                        id="Mobile No."
                                        name="Mobile No."
                                        placeholder="Mobile No."
                                        className="form-control"
                                        
                                        type="text"
                                    />
                                </div>
                               
                                <div className="form-group col-md-12">
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        cols={40}
                                        rows={5}
                                        className="form-control"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="invalidCheck2"
                                                
                                            />
                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                <small>
                                                    By clicking Submit, you agree to our Terms &amp;
                                                    Conditions, Visitor Agreement and Privacy Policy.
                                                </small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <button type="button" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
