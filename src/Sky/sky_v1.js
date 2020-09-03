import React, {Component} from 'react';
import ImageSlider from '../imageSlider';
import ProgramInfo from "../programInfo";
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import banner from '../assets/placeholder.png';
import Footer from '../footer-temp';
import'./sky_v1.css';
import fire from '../firebase/file';
import Button1 from "../modules/Button1";
import Second_Title_Bold from "../modules/Second_Title_Bold"
import FormSectionTitle from "../modules/FormSection_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import FormComponent from "../modules/formComponent"
import FormConsent from "../modules/FormConsent"
import FormFile from "../modules/FormFile"
import IncompleteFormModal from "../incompleteFormModal";
import SuccessModal from '../successModal';
import InvalidFileModal from '../invalidFileModal';
import mainImage from '../assets/sky4.jpeg';
import {Helmet} from "react-helmet";
import Slider from './img_slider_final_sky3'
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import Second_Title_Red from "../modules/Second_Title_Red"

class SkyV1 extends Component {

  constructor(props) {
    super(props);
    this.state={
      file: null,
      show:false,
      show2:false,
      showInvalidFile:false
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleModal=this.handleModal.bind(this);
    this.handleModal2=this.handleModal2.bind(this);
    this.cancelCourse=this.cancelCourse.bind(this);
    this.invalidFile=this.invalidFile.bind(this);
  }

  handleModal() {
    this.setState({show:!this.state.show})
  }

  handleModal2() {
    this.setState({show2:!this.state.show2})
  }

  invalidFile() {
    this.setState({showInvalidFile:!this.state.showInvalidFile});
  }

  cancelCourse() {
    document.getElementById('firstName').value="";
    document.getElementById('lastName').value="";
    document.getElementById('userEmail').value="";
    document.getElementById('description').value="";
    document.getElementById('location').value="";
    document.getElementById('date').value="";
    document.getElementById('fileInput').value="";
  }

  checkValue() {
    var firstNameLength=document.getElementById('firstName').value.length;
    var lastNameLength=document.getElementById('lastName').value.length;
    var userEmailLength=document.getElementById('userEmail').value.length;
    var descriptionLength=document.getElementById('description').value.length;
    var locationLength=document.getElementById('location').value.length;
    var dateLength=document.getElementById('date').value.length;
    var subjectFile=document.getElementById('subjectFile').value.length;

    var result=firstNameLength*lastNameLength*userEmailLength*descriptionLength*locationLength*dateLength*subjectFile;

    if(result==0) {
        return true;
      }else {
        return false;
      }

  }

  onChange(e){
    this.setState({file: e.target.files[0]})
  }

  async submitForm(e){
    e.preventDefault();
    if(this.checkValue()) {
      this.handleModal2();
    } else {
      var firstName=document.getElementById('firstName').value;
      var lastName=document.getElementById('lastName').value;
      var userEmail=document.getElementById('userEmail').value;
      var description=document.getElementById('description').value;
      var location=document.getElementById('location').value;
      var date=document.getElementById('date').value;

      var testFinal={
        firstName:firstName,
        lastName:lastName,
        userEmail:userEmail,
        description:description,
        location:location,
        date:date,
        from:"vancouvertaiwanfest"
      }
      await this.uploadFile(this.state.file, testFinal);
    }

  }

  // fetches php and saves to fb on success
  async uploadFile(file, formInputs) {

      var formData = new FormData();
      formData.append('skyPhoto', file);
      formData.append('firstName', formInputs['firstName']);
      formData.append('lastName', formInputs['lastName']);
      formData.append('userEmail', formInputs['userEmail']);
      formData.append('description', formInputs['description']);
      formData.append('location', formInputs['location']);
      formData.append('date', formInputs['date']);

      const response = await fetch('sky_form_photos-en.php', {
        method: 'POST',
        body: formData
      })
      .then(data => data.text())
      .then(data=> {
        if(data==="valid") {
          this.handleModal();
          let messageRef=fire.database().ref('skyTest').orderByKey().limitToLast(100);
          fire.database().ref('skyTest').push(formInputs);
        } else if(data==="invalid") {
          this.invalidFile();
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  goToSky=()=> {
    window.location='Sky';
  };
  render() {

    var text =`What is something that you can see when you look up, no matter wherever you are in the world? The sky is one constant no matter where you are and what time of day, it is there above the horizon.

Working with photographers in Canada and Taiwan, Vancouver TAIWANfest presents Eight massive lanterns at šxʷƛ̓ənəq Xwtl'e7énḵ Square (formally known as Vancouver Art Gallery North Plaza) in downtown Vancouver. These images show that despite our geographical differences, we all look towards that same sky that looms over our heads, further reaffirming that we are all in this together. Sky is built on the concept of removing the influence of colour; by looking past our differences, we can see that we are one and the same.

In all that the world has gone through, the unchanging sky gives people a sense of hope and anticipation for the feeling of a normal day to come again. Furthermore, Indigenous teachings and stories about the sky can guide us in these times. By giving each image a background story, we can implore others to look to the sky and gain strength.

Your experience and view of the sky will be different depending on the time of day. These lanterns will create a whole new dynamic look and feel through the use of LED lights in the evenings.`

var public_health=`As the province is working to reopen the economy in a safe manner and more and more people are getting back to a new normal, please follow all public health guidelines to protect yourself and others from COVID-19. Individuals should monitor their health for signs and symptoms of COVID-19. And if you’re not feeling well, they recommend staying home at this time. Respect social-distancing measures when outdoors and visiting the exhibit. Wear a face covering to protect yourself and others, especially when social-distancing is not possible such as on transit. By visiting the on-site “Sky” installation, you acknowledge that there are inherent risks associated with the COVID-19 Pandemic and will not hold ACSEA or our programming partners liable for your health.`
    return (
      <div>
        {/*<ImageSlider className="mainImage"/>*/}
        <Container fluid>
        {/*}  <Row>
              <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
                <img className="main_image" src={mainImage}/>
              </Col>
          </Row>*/}
        <Slider></Slider>

        <ProgramInfo subtitle="I'm different, just like you!" title="UNDER THE SAME SKY PROJECT" artistName="TAIWANfest" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FSky_Form&amp;src=sdkpreparse"   color="#246f79">
        </ProgramInfo>

        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}></MainContents_Middle_Adonis>

          <Second_Title_Red secondTitle="PUBLIC HEALTH NOTICE"></Second_Title_Red>
        <MainContents_Middle style={{color:"#0C3866"}} font="sofia-pro" contents={public_health}></MainContents_Middle>
        <Row>
          <Col style={{ marginBottom: "0px", textAlign:"center"}} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
              <Button bsPrefix="sky_installation" onClick={this.goToSky}> SKY INSTALLATION ART</Button>
          </Col>
          </Row>
        <Second_Title_Bold secondTitle="Under the same sky project"></Second_Title_Bold>

        <MainContents_Important contents="Be part of the art with our Under the same sky project. Follow us on social media to find out when to take a photo of the sky wherever you are globally and upload your photo for a chance to be featured. Click the link below for more details."></MainContents_Important>


        <FormSectionTitle title="PHOTOGRAPHER"></FormSectionTitle>

        <Form encType="multipart/form-data">

          <FormComponent formId="firstName" formClassName="inputfield_form" placeHolder="First Name"> </FormComponent>
          <FormComponent formId="lastName" formClassName="inputfield_form" placeHolder="Last Name"> </FormComponent>
          <FormComponent formId="userEmail" formClassName="inputfield_form" placeHolder="Email"> </FormComponent>

          <FormSectionTitle title="PHOTO INFO"></FormSectionTitle>

          {/*}<Form.Row style={{marginBottom:"30px"}}>*/}
            <Row style={{marginBottom:"30px"}}>
              <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control id="description" as ="textArea" className="inputfield" type="text" placeholder="Description" size="lg"/>
              </Col>
            </Row>
          {/*}</Form.Row>*/}

          <FormComponent formId="location" formClassName="inputfield_form" placeHolder="Location"> </FormComponent>
          <FormComponent formId="date" formClassName="inputfield_form" placeHolder="Date"> </FormComponent>




          <FormFile FormId="subjectFile" onChange={this.onChange} hint="File must be .jpg or .png and under 1MB"></FormFile>

          <FormConsent inputId="checkbox-3" consent= "I consent TAIWANfest to use the submitted photo(s) as part of the &quot;Under the same sky&quot; Project."></FormConsent>
            <Button1 onclick={this.submitForm} title="SUBMIT" togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FSky_Form&amp;src=sdkpreparse" ></Button1>

        </Form>

        <IncompleteFormModal show={this.state.show2} onClick={()=>this.handleModal2()} />
        <SuccessModal show={this.state.show} onClick={()=>this.handleModal()} />
        <InvalidFileModal show={this.state.showInvalidFile} onClick={()=>this.invalidFile()} />

        </Container>
      <Footer content= "&copy; 2020 ASIAN-CANADIAN SPECIAL EVENTS ASSOCIATION"></Footer>
    </div>

    );
  }

}

export default SkyV1;
