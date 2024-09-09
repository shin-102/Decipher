/*
website type
web design level
web design choice
Multimedia Integration
Search Engine Optimization
contact form integration
analytics report
mobile responsiveness
third-party api's
number of pages
Content Management System (CMS) integration
1 year hosting plan + accessible domaine name

brand identity design
brand trademark
social media kit
brand assets concept

number of pictures
seconds of video
editing

profile setup
number of content per platform
campaign analytics report
community engagemetn
influencer outreach
ads creation for platforms
*/
// export interface

export interface ComparedData {
  Website_Type: string; 
  Web_Design_Level: string; 
  Web_Design_Choice: boolean; 
  Multi_Media_Integration: boolean; 
  Search_Engine_Optimization: boolean; 
  Contact_Form_Integration: boolean; 
  Analytics_Report: string; 
  Mobile_Responsiveness: boolean; 
  Third_Party_APIs: boolean; 
  Number_Of_Pages: string; 
  Content_Management_System_Integration: boolean; 
  one_year_hosting_plan_with_accessible_domain_name : boolean; 
  brand_Identity_Design: string; 
  brand_Trademark: boolean; 
  Design_Kit: number; 
  brand_Assets_Concept: number; 
  number_Of_Pictures: number; 
  seconds_Of_Video: string; 
  editing: boolean; 
  profile_Setup: boolean; 
  number_Of_Content_Per_Platform: string; 
  campaign_Analytics_Report: boolean; 
  community_Engagement: boolean; 
  influencer_Outreach: boolean; 
  ad_Creation_For_Platforms: boolean; 
}

const Plans: { [key: string]: ComparedData } = {
  'start-up' : {
    Website_Type: "vitrine",
    Web_Design_Level: "basic",
    Web_Design_Choice: false,
    Multi_Media_Integration: false,
    Search_Engine_Optimization: false,
    Contact_Form_Integration: true,
    Analytics_Report: "-",
    Mobile_Responsiveness: true,
    Third_Party_APIs: false,
    Number_Of_Pages: "3",
    Content_Management_System_Integration: false,
    one_year_hosting_plan_with_accessible_domain_name : true,
    brand_Identity_Design: "minimal",
    brand_Trademark: false,
    Design_Kit: 3,
    brand_Assets_Concept: 1,
    number_Of_Pictures: 8,
    seconds_Of_Video: "30 seconds",
    editing: true,
    profile_Setup: true,
    number_Of_Content_Per_Platform: "4 per 1",
    campaign_Analytics_Report: false,
    community_Engagement: false,
    influencer_Outreach: false,
    ad_Creation_For_Platforms: true,
  },
  'standard' : {
    Website_Type: "business",
    Web_Design_Level: "standard",
    Web_Design_Choice: true,
    Multi_Media_Integration: true,
    Search_Engine_Optimization: true,
    Contact_Form_Integration: true,
    Analytics_Report: "normal",
    Mobile_Responsiveness: true,
    Third_Party_APIs: false,
    Number_Of_Pages: "5",
    Content_Management_System_Integration: false,
    one_year_hosting_plan_with_accessible_domain_name : true,
    brand_Identity_Design: "corporate",
    brand_Trademark: false,
    Design_Kit: 6,
    brand_Assets_Concept: 2,
    number_Of_Pictures: 15,
    seconds_Of_Video: "90 seconds",
    editing: true,
    profile_Setup: true,
    number_Of_Content_Per_Platform: "6 per 2",
    campaign_Analytics_Report: true,
    community_Engagement: true,
    influencer_Outreach: false,
    ad_Creation_For_Platforms: true,
  },
  'advanced' : {
    Website_Type: "dynamic web application",
    Web_Design_Level: "enhanced",
    Web_Design_Choice: true,
    Multi_Media_Integration: true,
    Search_Engine_Optimization: true,
    Contact_Form_Integration: true,
    Analytics_Report: "enhanced",
    Mobile_Responsiveness: true,
    Third_Party_APIs: true,
    Number_Of_Pages: "customizable",
    Content_Management_System_Integration: true,
    one_year_hosting_plan_with_accessible_domain_name : true,
    brand_Identity_Design: "detailed",
    brand_Trademark: true,
    Design_Kit: 8,
    brand_Assets_Concept: 2,
    number_Of_Pictures: 25,
    seconds_Of_Video: "120 seconds",
    editing: true,
    profile_Setup: true,
    number_Of_Content_Per_Platform: "8 per 2",
    campaign_Analytics_Report: true,
    community_Engagement: true,
    influencer_Outreach: true,
    ad_Creation_For_Platforms: true,
  },
};

export const ComparisonData: ComparedData[] = Object.values(Plans);

// Get the keys from the Plans object
export const ComparisonKeys = Object.keys(Plans);

// Get the ComparisonData values from the Plans object
export const ComparisonValues = Object.values(Plans);