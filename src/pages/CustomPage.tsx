import React, { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import Layout from "../layout/Layout";

interface FormData {
  user_name: string;
  user_company: string;
  user_phone: string;
  user_email: string;
  websiteType: string;
  websitePages: string;
  webDesign: string;
  analyticsReport: string;
  designKitLimit: number;
  designKitElements: string[];
  numberPictures: string;
  videoSeconds: string;
  contentsPerPlatform: string;
  socialMediaPlatforms: string[];
}

export default function CustomPage() {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_company: '',
    user_phone: '',
    user_email: '',
    websiteType: '',
    websitePages: '',
    webDesign: '',
    analyticsReport: '',
    designKitLimit: 1,
    designKitElements: [],
    numberPictures: '',
    videoSeconds: '',
    contentsPerPlatform: '',
    socialMediaPlatforms: [],
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formValues: FormData = {
      websiteType: form.elements.namedItem('website-type') ? (form.elements.namedItem('website-type') as HTMLInputElement).value : '',
      websitePages: form.elements.namedItem('website-pages') ? (form.elements.namedItem('website-pages') as HTMLInputElement).value : '',
      webDesign: form.elements.namedItem('web-design') ? (form.elements.namedItem('web-design') as HTMLInputElement).value : '',
      analyticsReport: form.elements.namedItem('analytics-report') ? (form.elements.namedItem('analytics-report') as HTMLInputElement).value : '',
      designKitLimit: formData.designKitLimit,
      designKitElements: formData.designKitElements,
      numberPictures: form.elements.namedItem('number-pictures') ? (form.elements.namedItem('number-pictures') as HTMLInputElement).value : '',
      videoSeconds: form.elements.namedItem('video-seconds') ? (form.elements.namedItem('video-seconds') as HTMLInputElement).value : '',
      contentsPerPlatform: form.elements.namedItem('contents-per-platform') ? (form.elements.namedItem('contents-per-platform') as HTMLInputElement).value : '',
      socialMediaPlatforms: Array.from(form.querySelectorAll<HTMLInputElement>('input[name="social-media"]:checked')).map(input => input.value),
      user_name: form.elements.namedItem('user_name') ? (form.elements.namedItem('user_name') as HTMLInputElement).value : '',
      user_company: form.elements.namedItem('user_company') ? (form.elements.namedItem('user_company') as HTMLInputElement).value : '',
      user_email: form.elements.namedItem('user_email') ? (form.elements.namedItem('user_email') as HTMLInputElement).value : '',
      user_phone: form.elements.namedItem('user_phone') ? (form.elements.namedItem('user_phone') as HTMLInputElement).value : '',
    };

    setFormData(formValues);

    const emailMessage = `\nWebsite Type: ${formValues.websiteType}
                          Website Pages: ${formValues.websitePages}
                          Web Design: ${formValues.webDesign}
                          Analytics Report: ${formValues.analyticsReport}
                          Design Kit Limit: ${formValues.designKitLimit}
                          Design Kit Elements: ${formValues.designKitElements.join(', ')}
                          Number of Pictures: ${formValues.numberPictures}
                          Video's Seconds: ${formValues.videoSeconds}
                          Contents per Platform: ${formValues.contentsPerPlatform}
                          Social Media Platforms: ${formValues.socialMediaPlatforms.join(', ')}`;
    
        // Form validation checks
        if (!/^[a-zA-Z\s]*$/.test(formValues.user_name)) {
          setMessage('Name should contain only alphabetic characters.');
          setMessageType('error');
          return;
        }
    
        if (!/^[a-zA-Z\s]*$/.test(formData.user_company)) {
          setMessage('Company name should contain only alphabetic characters.');
          setMessageType('error');
          return;
        }
    
        if (!/^\d{10,}$/.test(formData.user_phone)) {
          setMessage('Phone number should be 10 digits or more.');
          setMessageType('error');
          return;
        }
    
        if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
          setMessage('Please enter a valid email address.');
          setMessageType('error');
          return;
        }
    
        // If all conditions are met, proceed with sending the email
    // Send email using EmailJS
    emailjs.send('Deciphersrv23_WalidHam', 'CustomPack_Sub2023com5', {
      user_name: formValues.user_name,
      user_company: formValues.user_company,
      user_email: formValues.user_email,
      user_phone: formValues.user_phone,
      message: emailMessage,
    }, 'a78S2fTPhZF0Zx6hp')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setMessage('Email sent successfully!');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setMessage('Error sending email. Please try again.');
        setMessageType('error');
      });
  };

  //*------------------------------------------------------------------

  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [designKitLimit, setDesignKitLimit] = useState(1);

  const handleDesignKitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDesignKitLimit(parseInt(event.target.value, 10));
    setSelectedElements([]);
  };

  const handleElementSelect = (element: string) => {
    if (selectedElements.length < designKitLimit) {
      setSelectedElements([...selectedElements, element]);
    }
  };

  const handleElementRemove = (element: string) => {
    setSelectedElements(selectedElements.filter((item) => item !== element));
  };

  return (
    <Layout>
      <article className="flex flex-col items-center container mx-auto py-24">
        <form className="space-y-6 bg-Beta p-6 rounded-3xl" onSubmit={handleFormSubmit}>
          <div className='space-y-2'>
            <label htmlFor='userName'>Name</label>
            <input type="text" id='userName' name="user_name" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
            <label htmlFor='userCompany'>Company</label>
            <input type="text" id='userCompany' name="user_company" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
            <label htmlFor='userEmail'>Email</label>
            <input type="email" id='userEmail' name="user_email" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
            <label htmlFor='userPhone'>Phone</label>
            <input type="text" id='userPhone' name="user_phone" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
          </div>
          <div className="space-y-2">
            <label htmlFor="website-type">Website Type</label>
            <select id="website-type" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white">
              <option value="vitrine">Vitrine</option>
              <option value="business">Business</option>
              <option value="application">Application</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="website-pages">Website Pages</label>
            <input type="number" id="website-pages" placeholder="Enter number of pages" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
          </div>

          <div className="space-y-2">
            <label>Web Design</label>
            <div>
              <input type="radio" id="our-suggestion" name="web-design" value="our-suggestion" />
              <label htmlFor="our-suggestion">Our Suggestion</label>
            </div>
            <div>
              <input type="radio" id="your-choice" name="web-design" value="your-choice" />
              <label htmlFor="your-choice">Your Choice</label>
            </div>
          </div>

          <div className="space-y-2">
            <label>Web Analytics' Report</label>
            <div>
              <input type="radio" id="analytics-yes" name="analytics-report" value="yes" />
              <label htmlFor="analytics-yes">Yes</label>
            </div>
            <div>
              <input type="radio" id="analytics-no" name="analytics-report" value="no" />
              <label htmlFor="analytics-no">No</label>
            </div>
          </div>


            <div className="container mx-auto py-8">
              <label htmlFor="design-kit">Design Kit:</label>
              <select id="design-kit" onChange={handleDesignKitChange} value={designKitLimit} className='bg-Beta-secondary text-Alpha'>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
          
              <div>
                <label htmlFor="design-kit-elements">Design Kit Elements:</label>
                <div className="flex flex-wrap">
                  {selectedElements.map((element) => (
                    <div key={element} className="bg-Beta-secondary text-Alpha px-2 py-1 m-1 rounded-full">
                      {element} <span onClick={() => handleElementRemove(element)} className="cursor-pointer">X</span>
                    </div>
                  ))}
                </div>
                {selectedElements.length < designKitLimit && (       
                <select id="design-kit-elements" className='bg-Beta-secondary text-Alpha' onChange={(e) => handleElementSelect(e.target.value)}>
                  <option value="">Select an element</option>
                  <option value="logo">Logo</option>
                  <option value="business-card">Business Card</option>
                  <option value="flyer">Flyer</option>
                  <option value="tshirt-design">T-Shirt Design</option>
                  <option value="physical-menu">Physical Menu</option>
                  <option value="digital-menu">Digital Menu</option>
                  <option value="poster">Poster</option>
                  <option value="price-label">Price Label</option>
                  <option value="other">Other</option>
                </select>
                )}        
              </div>
            </div>            
          

          <div className="space-y-2">
            <label htmlFor="number-pictures">Number of Pictures</label>
            <input type="number" id="number-pictures" placeholder="Enter number of pictures" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
          </div>

          <div className="space-y-2">
            <label htmlFor="video-seconds">Number of Video's Seconds</label>
            <input type="number" id="video-seconds" placeholder="Enter number of seconds" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
          </div>

          <div className="space-y-2">
            <label htmlFor="contents-per-platform">Number of Contents per Platform</label>
            <input type="number" id="contents-per-platform" placeholder="Enter number of contents" className="w-full px-4 py-2 bg-Beta-secondary rounded text-white"/>
            
            <div>
              <label>Choose Social Media Platforms</label>
              <input type="checkbox" id="facebook" name="social-media" value="facebook"/>
              <label htmlFor="facebook">Facebook</label>

              <input type="checkbox" id="instagram" name="social-media" value="instagram"/>
              <label htmlFor="instagram">Instagram</label>

              <input type="checkbox" id="twitter" name="social-media" value="twitter"/>
              <label htmlFor="twitter">Twitter</label>
              {/* Add more social media platforms as needed */}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="px-8 py-4 text-Dark bg-Alpha rounded hover:bg-cyan-800">Submit</button>
          </div>
          {message && (
              <div className={`mt-4 text-${messageType === 'success' ? 'green' : 'red'}-500`}>
                {message}
              </div>
          )}
        </form>
      </article>
    </Layout>
  );
}