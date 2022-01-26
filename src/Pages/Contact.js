import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Contact.css'
// import Twins from '../images/Twins.png'
// npm install @mui/icons-material
// npm install @mui/material
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { actionAddClient } from '../redux/actions/client'
import { Modal, Button } from 'react-bootstrap'
import DressVid from '../video/DressVid.mp4'
import { FormHelperText, InputLabel, MenuItem } from '@mui/material';
// import { styled } from '@mui/material/styles';
import CSSTextField from '../components/CSSTextField'
import CSSSelect from '../components/CSSSelect'
// npm install -g npm (new npm version install)




function Contact() {

    function redirect_Main() {
        var tID = setTimeout(function () {
            window.location.href = "/";
            window.clearTimeout(tID);
            // clear time out.
        }, 0);
    }

    // function returnFileSize(number) {
    //     if (number < 1024) {
    //         return number + 'bytes';
    //     } else if (number >= 1024 && number < 1048576) {
    //         return (number / 1024).toFixed(1) + 'KB';
    //     } else if (number >= 1048576) {
    //         return (number / 1048576).toFixed(1) + 'MB';
    //     }
    // }

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)
        redirect_Main()
    };
    const [fname, setFName] = useState('');
    const [age, setAge] = useState('0 - 15');
    const [lname, setLName] = useState('');
    const [consultation, setConsultation] = useState('');
    const [size, setSize] = useState(0);
    const [email, setEmail] = useState('');
    const [existingnew, setExistingnew] = useState('');
    const [fitting, setFitting] = useState('');
    const [phone, setPhone] = useState('');
    const [shipping, setShipping] = useState('');
    const [comments, setComments] = useState('');
    const [budget, setBudget] = useState('');
    const [height, setHeight] = useState('');
    const [color, setColor] = useState('#000000');
    const [upload1, setUpload1] = useState(null)
    const [upload2, setUpload2] = useState(null)
    const [upload3, setUpload3] = useState(null)
    const [upload4, setUpload4] = useState(null)
    const [upload5, setUpload5] = useState(null)
    const [upload6, setUpload6] = useState(null)
    const [purpose, setPurpose] = useState({
        Birthday: false,
        WeddingGuest: false,
        Prom: false,
        Wedding: false,
        Reception: false,
        Anniversary: false,
        RedCarpet: false,
        Graduation: false,
        SisofBride: false,
        MotherofBride: false,
        EveningWear: false,
        Other: false
    });

    const client = useSelector(state => state.client)


    const handleSubmit = e => {
        e.preventDefault();
        // Capture Info from Contact State 
        client.FName = fname;
        client.LName = lname;
        client.Age = age;
        client.Consultation = consultation;
        client.Size = size;
        client.EMail = email;
        client.Existingnew = existingnew;
        client.Fitting = fitting;
        client.Phone = phone;
        client.Shipping = shipping;
        client.Purpose = purpose;
        client.Comments = comments;
        client.Budget = budget;
        client.Height = height;
        client.Color = color;
        client.Upload1 = upload1;
        client.Upload2 = upload2;
        client.Upload3 = upload3;
        client.Upload4 = upload4;
        client.Upload5 = upload5;
        client.ClientPic = upload6;


        // Submit info as client and dispatch to redux for global state
        console.log(client)
        dispatch(actionAddClient(client))
        

        // deploy "Sumbit Successful Modal"
        handleShow()
        // Refresh page on close or redirect to other

    }



    return (
        <div className="contact">
            < Header />
            <div className="contact-body">
                <div className='contact-form text-center'>

                    <div className='contact-image'>
                        <video className='videoTagContact' autoPlay loop controls muted>
                            <source className='video' src={DressVid} type='video/mp4' />
                        </video>

                        <h4 className='contact-text'>Please Fill Out The Form Below <br />To Start Your Order</h4>
                        < KeyboardDoubleArrowDownIcon />
                    </div>
                    <form className="contact-form-inputs" onSubmit={handleSubmit}>
                        <fieldset>
                            <br />
                            <label htmlFor="contact-names" className="form-check">Name </label>
                            <div className="contact-names">
                                <div className="form-check">
                                    <CSSTextField id="fnameinput" label="First" variant="outlined" type="text" placeholder="Your First Name" value={fname} onChange={e => setFName(e.target.value)} required />
                                </div>
                                <div className="form-check">
                                    <CSSTextField id="lnameinput" label="Last" variant="outlined" type="text" placeholder="Your Last Name" value={lname} onChange={e => setLName(e.target.value)} required />
                                </div>
                            </div>
                        </fieldset>
                        <br />
                        <fieldset>
                            <label htmlFor="contact-details" className="form-check">Contact Details </label>
                            <div className="contact-details">
                                <div className="form-check">
                                    <CSSTextField id="phoneinput" label="Phone" variant="outlined" type="tel" placeholder="Your Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
                                </div>

                                <div className="form-check">
                                    <CSSTextField label="E-Mail" variant="outlined" type="email" id="emailinput" placeholder="Your E-Mail Address" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset >
                            <div className="contact-dropdown">
                                <div className="selector form-check">
                                    <InputLabel className="form-check">Size *</InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Dress Size"
                                        id="size-selector"
                                        value={size}
                                        onChange={e => setSize(e.target.value)}
                                        label="Size"

                                    >
                                        <MenuItem value={0} > 0 </MenuItem>
                                        <MenuItem value={2} > 2 </MenuItem>
                                        <MenuItem value={4} > 4 </MenuItem>
                                        <MenuItem value={6} > 6 </MenuItem>
                                        <MenuItem value={8} > 8 </MenuItem>
                                        <MenuItem value={10} > 10 </MenuItem>
                                        <MenuItem value={12} > 12 </MenuItem>
                                        <MenuItem value={14} > 14 </MenuItem>
                                        <MenuItem value={16} > 16 </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center"> Select Your Dress Size </FormHelperText>
                                </div>

                                <div className="selector form-check">
                                    <InputLabel className="form-check"> Age Range * </InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Age Range"
                                        id="age-selector"
                                        label="Age *"
                                        value={age}
                                        onChange={e => setAge(e.target.value)}
                                    >
                                        <MenuItem value='0 - 15'> 0 - 15 </MenuItem>
                                        <MenuItem value='16 - 21' > 16 - 21 </MenuItem>
                                        <MenuItem value='22 - 27' > 22 - 27 </MenuItem>
                                        <MenuItem value='28 - 34' > 28 - 34 </MenuItem>
                                        <MenuItem value='35 - 40' > 35 - 40 </MenuItem>
                                        <MenuItem value='41 - 49' > 41 - 49 </MenuItem>
                                        <MenuItem value='50 +' > 50 + </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center"> Select Your Age Range </FormHelperText>

                                </div>

                                <div className="selector form-check">
                                    <InputLabel className="form-check">Budget *</InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Budget"
                                        id="budget-selector"
                                        label="Budget *"
                                        value={budget}
                                        onChange={e => setBudget(e.target.value)}
                                    >
                                        <MenuItem value='$0 - $499'> $0 - $499 </MenuItem>
                                        <MenuItem value='$500 - $999' > $500 - $999 </MenuItem>
                                        <MenuItem value='$1,000 - $1,499' > $1,000 - $1,499 </MenuItem>
                                        <MenuItem value='$1,500 - $1,999' > $1,500 - $1,999 </MenuItem>
                                        <MenuItem value='$2,000 - $2,999' > $2,000 - $2,999 </MenuItem>
                                        <MenuItem value='$3,000 - $3,999' > $3,000 - $3,999 </MenuItem>
                                        <MenuItem value='$4,000 - $4,999' > $4,000 - $4,999 </MenuItem>
                                        <MenuItem value='$5,000 +' > $5,000 + </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center">Select Dress Budget </FormHelperText>

                                </div>

                                <div className="selector form-check">
                                    <InputLabel className="form-check">Height *</InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Budget"
                                        id="height-selector"
                                        label="Height *"
                                        value={height}
                                        onChange={e => setHeight(e.target.value)}
                                    >

                                        <MenuItem value={' 4\' 10" & Below'}> 4'10" & Below </MenuItem>
                                        <MenuItem value={' 4\' 11" '}> 4'11" </MenuItem>
                                        <MenuItem value={' 5\' 0" '}> 5' 0" </MenuItem>
                                        <MenuItem value={' 5\' 1" '}> 5' 1" </MenuItem>
                                        <MenuItem value={' 5\' 2" '}> 5' 2" </MenuItem>
                                        <MenuItem value={' 5\' 3" '}> 5' 3" </MenuItem>
                                        <MenuItem value={' 5\' 4" '}> 5' 4" </MenuItem>
                                        <MenuItem value={' 5\' 5" '}> 5' 5" </MenuItem>
                                        <MenuItem value={' 5\' 6" '}> 5' 6" </MenuItem>
                                        <MenuItem value={' 5\' 6" '}> 5' 7" </MenuItem>
                                        <MenuItem value={' 5\' 6" '}> 5' 8" </MenuItem>
                                        <MenuItem value={' 5\' 6" '}> 5' 9" </MenuItem>
                                        <MenuItem value={' 5\' 6" '}> 5' 10" </MenuItem>
                                        <MenuItem value={' 5\' 6" '}> 5' 11" </MenuItem>
                                        <MenuItem value={' 6\' 0" '}> 6' 0" </MenuItem>
                                        <MenuItem value={' 6\' 1" '}> 6' 1" </MenuItem>
                                        <MenuItem value={' 6\' 2" '}> 6' 2" </MenuItem>
                                        <MenuItem value={' 6\' 3" '}> 6' 3" </MenuItem>
                                        <MenuItem value={' 6\' 4" '}> 6' 4" </MenuItem>
                                        <MenuItem value={' 6\' 5" & Above'}> 6' 5" & Above </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center">Select Your Height</FormHelperText>

                                </div>

                            </div>
                        </fieldset>

                        <fieldset>

                            <label htmlFor="outfit-selector" id="outfit-selector">Purpose of Outfit <br /> (You Can Choose More Than One Option) </label>
                            <br />
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, Birthday: (!purpose.Birthday) })} className="form-check-input" />
                                <label className="form-check-label label-input">Birthday</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, WeddingGuest: (!purpose.WeddingGuest) })} className="form-check-input" />
                                <label className="form-check-label label-input"> Wedding Guest</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, Prom: (!purpose.Prom) })} className="form-check-input" />
                                <label className="form-check-label label-input"> Prom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, Wedding: (!purpose.Wedding) })} className="form-check-input" />
                                <label className="form-check-label label-input"> Wedding</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, Reception: (!purpose.Reception) })} className="form-check-input" />
                                <label className="form-check-label label-input"> Reception Dress</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, Anniversary: (!purpose.Anniversary) })} className="form-check-input" />
                                <label className="form-check-label label-input"> Anniversary Dress</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, RedCarpet: (!purpose.RedCarpet) })} className="form-check-input" />
                                <label className="form-check-label label-input"> Red Carpet</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, Graduation: (!purpose.Graduation) })} className="form-check-input" />
                                <label className="form-check-label label-input">  Graduation</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, SisofBride: (!purpose.SisofBride) })} className="form-check-input" />
                                <label className="form-check-label label-input">  Sister Of Bride/Groom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, MotherofBride: (!purpose.MotherofBride) })} className="form-check-input" />
                                <label className="form-check-label label-input">Mother of Bride/Groom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, EveningWear: (!purpose.EveningWear) })} className="form-check-input" />
                                <label className="form-check-label label-input">  Evening Wear</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({ ...purpose, Other: (!purpose.Other) })} className="form-check-input" />
                                <label className="form-check-label label-input">  Other</label>
                            </p>

                        </fieldset>

                        <fieldset>
                            <label htmlFor="design-selector" id="design-selector">Existing or New Design? </label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="design-selector" id="NewDesign" value={existingnew} onChange={e => setExistingnew("New Design")} />
                                <label htmlFor="NewDesign" className="label-input">
                                    New Design
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="design-selector" id="ExistingDesign" value={existingnew} onChange={e => setExistingnew("Existing Design")} />
                                <label htmlFor="ExistingDesign" className="label-input">
                                    Existing Design
                                </label>
                            </div>

                        </fieldset>

                        <fieldset>
                            <label htmlFor="ColorSelector" id="ColorSelector">Select A Dress Color <br /> (Please Be As Accurate As Possible)</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input type="color" name="color-selector" id="ColorSelector" value={color} onChange={e => setColor(e.target.value)} />
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="fitting-selector" id="fitting-selector">Available For A Fitting In Our Atlanta Studio?</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="fitting-selector" value={fitting} onChange={e => setFitting("Atlanta Fitting")} id="Yes" />
                                <label htmlFor="Yes" className="label-input">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="fitting-selector" value={fitting} onChange={e => setFitting("No Fitting")} id="No" />
                                <label htmlFor="No" className="label-input">
                                    No
                                </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="shipping-selector" id="shipping-selector">Shipping Information</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="shipping-selector" id="Local" value={shipping} onChange={e => setShipping("Local Shipping")} />
                                <label htmlFor="Local" className="label-input">
                                    Local (U.S.)
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="shipping-selector" id="International" value={shipping} onChange={e => setShipping("International Shipping")} />
                                <label htmlFor="International" className="label-input">
                                    International
                                </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="consultation-selector" id="consultation-selector">Consultation Preference</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="consultation-selector" id="inPerson" value={consultation} onChange={e => setConsultation("In-Person Consultation")} />
                                <label htmlFor="inPerson" className="label-input">
                                    In Person
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="consultation-selector" id="Remote" value={consultation} onChange={e => setConsultation("Remote Consultation")} />
                                <label htmlFor="Remote" className="label-input">
                                    Remote
                                </label>
                            </div>

                        </fieldset>

                        <div>
                            <label>Upload 1 Full-Body Photo:</label>
                            <p>(Max Size: 1 MB)</p>
                            <div className="inspiration">
                                <input className="pic-input" id="fileinput6" type="file" alt='' onChange={e => { 
                                    if (e.target.files[0].size > 1048576) {
                                        alert('This Image File Is Too Large!');
                                        setUpload6(null);
                                        document.getElementById('fileinput6').value = ''
                                    } else {
                                        setUpload6(e.target.value);
                                    }
                                }} />

                            </div>
                        </div>
                        <br />
                        {/* Requires Pay Plan */}
                        <div>
                            <label>Upload Up To 5 Garment Inspiration Photos:</label>
                            <p>(Max Size: 1 MB)</p>
                            <div className="inspiration">
                                <input className="pic-input" id="fileinput1" type="file" alt='' onChange={e => {
                                    if (e.target.files[0].size > 1048576) {
                                        alert('This Image File Is Too Large!');
                                        setUpload1(null);
                                        document.getElementById('fileinput1').value = ''
                                    } else {
                                        setUpload1(e.target.value);
                                        // e.target.files[0]
                                    }

                                }} />
                                <input className="pic-input" id="fileinput2" type="file" alt='' onChange={e => { 
                                    if (e.target.files[0].size > 1048576) {
                                        alert('This Image File Is Too Large!');
                                        setUpload2(null);
                                        document.getElementById('fileinput2').value = ''
                                    } else {
                                        setUpload2(e.target.value);
                                        // e.target.files[0]
                                    }
                                }} />
                                <input className="pic-input" id="fileinput3" type="file" alt='' onChange={e => { 
                                    if (e.target.files[0].size > 1048576) {
                                        alert('This Image File Is Too Large!');
                                        setUpload3(null);
                                        document.getElementById('fileinput3').value = ''
                                    } else {
                                        setUpload3(e.target.value);
                                        // e.target.files[0]
                                    }
                                }} />
                                <input className="pic-input" id="fileinput4" type="file" alt='' onChange={e => { 
                                    if (e.target.files[0].size > 1048576) {
                                        alert('This Image File Is Too Large!');
                                        setUpload4(null);
                                        document.getElementById('fileinput4').value = ''
                                    } else {
                                        setUpload4(e.target.value);
                                    }
                                }} />
                                <input  className="pic-input" 
                                        id="fileinput5" 
                                        type="file" 
                                        alt='' 
                                        onChange={e => { 
                                        if (e.target.files[0].size > 1048576) {
                                            alert('This Image File Is Too Large!');
                                            setUpload5(null);
                                            document.getElementById('fileinput5').value = ''
                                        } else {
                                            setUpload5(e.target.value);
                                        }
                                    }} />
                            </div>
                        </div>
                        <br />


                        {/* Photo Inspiration Inputs x 5 pictures */}
                        {/* Height dropdown */}
                        {/* MUI Swap Out & Color Theme Change*/}
                        {/* Pick A Dress Color */}
                        {/* Terms & Conditons / FAQs */}
                        <div className="col-md-6 comment_box">
                            <textarea name="comments" cols="50" rows="10" placeholder="Inquiry/Comments/Notes"
                                required minLength={5} maxLength={500}
                                className="form-check comments" onChange={e => setComments(e.target.value)} />
                        </div>
                        <br />

                        <div>
                            <button type="submit" className="contact-button" onSubmit={handleSubmit}>Submit</button>
                        </div>
                        <br />

                        <Modal size="md" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Submission Successful!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                Thank you for choosing SLR Couture!  We have received your information and will be in touch with you soon!
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Exit
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </form>
                </div>
            </div>
            < Footer />
        </div>

    )
}

export default Contact
