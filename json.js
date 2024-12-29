const json = {
    "title": "Algorithmic Impact Assessment",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "title": "General Info : Who developed the system ? ",
        "description": "General the organisation responsible for the system",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "title": "Which kind of entity is your organisation?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Provider: a natural or legal person, public authority, agency or other body that develops an AI system or a general purpose AI model (or that has an AI system or a general purpose AI model developed) and places them on the market or puts the system into service under its own name or trademark, whether for payment or free of charge;"
              },
              {
                "value": "Item 2",
                "text": "Deployer: any natural or legal person, public authority, agency or other body using an AI system under its authority except where the AI system is used in the course of a personal non-professional activity;"
              },
              {
                "value": "Item 3",
                "text": "Distributor: any natural or legal person in the supply chain, other than the provider or the importer, that makes an AI system available on the Union market;"
              },
              {
                "value": "Item 4",
                "text": "Importer: any natural or legal person located or established in the Union that places on the market an AI system that bears the name or trademark of a natural or legal person established outside the Union;"
              },
              {
                "value": "Item 5",
                "text": "Authorised representative: any natural or legal person located or established in the Union who has received and accepted a written mandate from a provider of an AI system or a general purpose AI model to, respectively, perform and carry out on its behalf the obligations and procedures established by this Regulation."
              },
              {
                "value": "Item 6",
                "text": "Product manufacturer: places on the market or puts into service an AI system together with their product and under their own name or trademark; (NOTE : if the product has a newly developed AI system in it your organisations counts as a provider.)"
              },
              {
                "value": "Item 7",
                "text": "academic research lab"
              },
              {
                "value": "Item 8",
                "text": "non profit"
              },
              {
                "value": "Item 9",
                "text": "company"
              }
            ]
          },
          {
            "type": "text",
            "name": "question2",
            "title": "What's the name of your organisation?\n"
          },
          {
            "type": "comment",
            "name": "question3",
            "title": "Give a short description of your organisation. (Include a website link if you have one)"
          },
          {
            "type": "text",
            "name": "question4",
            "title": "If your organisation or team has a mission statement, include it here"
          },
          {
            "type": "multipletext",
            "name": "question5",
            "title": "Contact details of your organisation \n",
            "items": [
              {
                "name": "text1",
                "title": "email\n"
              },
              {
                "name": "text2",
                "title": "phone number\n"
              },
              {
                "name": "text3",
                "title": "country"
              },
              {
                "name": "text4",
                "title": "zip code\n"
              },
              {
                "name": "text5",
                "title": "city"
              },
              {
                "name": "text6",
                "title": "street"
              },
              {
                "name": "text7",
                "title": "number"
              }
            ]
          }
        ]
      },
      {
        "name": "page2",
        "title": "General info : Who is answering this questionnaire ?",
        "description": "General questions for the people replying to the questions of this questionnaire",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question6",
            "title": "Is the questionnaire being filled by one or multiple persons ?",
            "choices": [
              {
                "value": "Item 1",
                "text": "One"
              },
              {
                "value": "Item 2",
                "text": "More people"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "question7",
            "visibleIf": "{question6} = 'Item 1'",
            "title": "Details of the person filling the questionnaire",
            "items": [
              {
                "name": "text1",
                "title": "Name\n"
              },
              {
                "name": "text2",
                "title": "Job title\n"
              },
              {
                "name": "text3",
                "title": "Email"
              },
              {
                "name": "text7",
                "title": "Phone"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "question8",
            "visibleIf": "{question6} = 'Item 1'",
            "title": "What's your relationship to the reviewed system : \n",
            "choices": [
              {
                "value": "Item 1",
                "text": "I'm an independent reviewer not working in the organisation that made the system"
              },
              {
                "value": "Item 2",
                "text": "I do not work on the system's development but I am a part of the organisation that made it"
              },
              {
                "value": "Item 3",
                "text": "I worked on the development of the system and I am a part of the organisation that made it"
              }
            ],
            "showOtherItem": true
          },
          {
            "type": "multipletext",
            "name": "question10",
            "visibleIf": "{question6} = 'Item 2'",
            "title": "Contact details of the reviewers team : \n",
            "items": [
              {
                "name": "text1",
                "title": "Email"
              },
              {
                "name": "text2",
                "title": "Phone"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "question11",
            "visibleIf": "{question6} = 'Item 2'",
            "title": "What were the reviewers' relationship with the reviewed system ?",
            "choices": [
              {
                "value": "Item 1",
                "text": "Independent reviewers not working in the organisation that made the system"
              },
              {
                "value": "Item 2",
                "text": "Did not work on the system's development but they are a part of the organisation that made it"
              },
              {
                "value": "Item 3",
                "text": "They worked on the system's development and are a part of the organisation that made it"
              }
            ],
            "showOtherItem": true
          },
          {
            "type": "comment",
            "name": "question9",
            "title": "Describe how did you acquire the needed information for replying to all of the questions.\n"
          },
          {
            "type": "boolean",
            "name": "question12",
            "title": "Have you or any other authorities conducted another impact assessment?"
          },
          {
            "type": "text",
            "name": "question13",
            "visibleIf": "{question12} = true",
            "title": "Give a link to the other assessments\n"
          },
          {
            "type": "comment",
            "name": "question14",
            "title": " What are the potential limitations of the questionnaire? "
          },
          {
            "type": "boolean",
            "name": "question16",
            "title": "Will some independent party review your answer's once the assessment is completed? "
          },
          {
            "type": "multipletext",
            "name": "question17",
            "visibleIf": "{question16} = true",
            "title": "Give the contact details of said party",
            "items": [
              {
                "name": "text1",
                "title": "Name"
              },
              {
                "name": "text2",
                "title": "Email\n"
              },
              {
                "name": "text3",
                "title": "Phone"
              }
            ]
          }
        ]
      },
      {
        "name": "page3",
        "title": "General info : What's the system all about ?",
        "elements": [
          {
            "type": "text",
            "name": "question15",
            "title": "What's the system's title/name?\n"
          },
          {
            "type": "radiogroup",
            "name": "question18",
            "title": "Project Phase :",
            "choices": [
              {
                "value": "Item 1",
                "text": "Design"
              },
              {
                "value": "Item 2",
                "text": "Development"
              },
              {
                "value": "Item 3",
                "text": "Evaluation"
              },
              {
                "value": "Item 4",
                "text": "Operation"
              },
              {
                "value": "Item 5",
                "text": "Retirement"
              }
            ]
          },
          {
            "type": "checkbox",
            "name": "question20",
            "title": "Does your system meet any of the following scope criteria ? \n",
            "validators": [
              {
                "type": "expression"
              }
            ],
            "choices": [
              {
                "value": "Item 1",
                "text": "I am placing on the market or putting into service AI systems in the Union (regardless of whether you are established within the Union or in a third country)"
              },
              {
                "value": "Item 2",
                "text": "My AI system's output is used in the EU"
              },
              {
                "value": "Item 3",
                "text": "My AI system is located in a non-EU country where 'EU Member State law' applies by virtue of public international law"
              }
            ],
            "showNoneItem": true,
            "noneText": "None of the above"
          },
          {
            "type": "checkbox",
            "name": "question22",
            "title": "Does your system engage in any of the prohibited practices ?",
            "choices": [
              {
                "value": "Item 4",
                "text": "Real time biometric systems : e.g. biometric categorisation , predictive policing , expanding facial recognition databases , real-time remote biometrics ( exceptions do apply for crime prevention and criminal investigation in law enforcement and national security contexts)."
              },
              {
                "value": "Item 5",
                "text": "Social scoring algorithms that can be used to evaluate individuals based on personal characteristics and/or their behaviour in a manner that could cause harm or lead to unfavourable treatment of that individual."
              },
              {
                "value": "Item 6",
                "text": "Manipulative tactics that exploit the vulnerabilities of specific individuals to distort their behaviour in a manner that is likely to cause physical or phycological harm ( e.g. emotion recognition , subliminal techniques, manipulation, and deception )"
              }
            ],
            "showNoneItem": true,
            "noneText": "None of the above"
          },
          {
            "type": "checkbox",
            "name": "question24",
            "title": "Does your system fall within any of the following excluded categories?\n",
            "choices": [
              {
                "value": "Item 4",
                "text": "AI systems developed and used exclusively for military purposes"
              },
              {
                "value": "Item 5",
                "text": "AI systems used by public authorities or international organisations in third countries for law enforcement and judicial cooperation"
              },
              {
                "value": "Item 6",
                "text": "AI research and development activity"
              },
              {
                "value": "Item 7",
                "text": "AI components provided under free and open-source licences"
              },
              {
                "value": "Item 8",
                "text": "People using AI systems for purely personal non professional activity"
              }
            ],
            "showNoneItem": true,
            "noneText": "None of the above"
          },
          {
            "type": "comment",
            "name": "question19",
            "title": "Describe your system. (Mention its purpose,  its intended uses and anything else you deem important)"
          },
          {
            "type": "comment",
            "name": "question21",
            "title": "If you have links to any supplementary information on the system such as demonstrations, functional specifications, slide decks, or system architecture diagrams, please include links below."
          },
          {
            "type": "checkbox",
            "name": "question23",
            "title": "Does your AI system (or the product for which your AI system is a 'safety component') fall within any of the following high-risk categories?\n",
            "choices": [
              {
                "value": "Item 4",
                "text": "Civil aviation security"
              },
              {
                "value": "Item 5",
                "text": "Two- or three-wheel vehicles and quadricycles"
              },
              {
                "value": "Item 6",
                "text": "Agricultural and forestry vehicles"
              },
              {
                "value": "Item 7",
                "text": "Marine equipment"
              },
              {
                "value": "Item 8",
                "text": "Interoperability of the rail systems"
              },
              {
                "value": "Item 9",
                "text": "Motor vehicles and their trailers"
              },
              {
                "value": "Item 10",
                "text": "Civil aviation"
              },
              {
                "value": "Item 13",
                "text": "Machinery"
              },
              {
                "value": "Item 14",
                "text": "Toys"
              },
              {
                "value": "Item 15",
                "text": "Recreational craft & personal watercraft"
              },
              {
                "value": "Item 16",
                "text": "Lifts and safety components of lifts"
              },
              {
                "value": "Item 17",
                "text": "Equipment and protective systems intended for use in potentially explosive atmospheres"
              },
              {
                "value": "Item 18",
                "text": "Radio equipment"
              },
              {
                "value": "Item 19",
                "text": "Pressure equipment"
              },
              {
                "value": "Item 20",
                "text": "Cableway installations"
              },
              {
                "value": "Item 21",
                "text": "Personal protective equipment"
              },
              {
                "value": "Item 22",
                "text": "Appliances burning gaseous fuels"
              },
              {
                "value": "Item 23",
                "text": "Medical devices"
              },
              {
                "value": "Item 24",
                "text": "In vitro diagnostic medical devices"
              },
              {
                "value": "Item 27",
                "text": "Biometrics (to the extent that these do not fall under prohibited practices )"
              },
              {
                "value": "Item 28",
                "text": "Critical infrastructure"
              },
              {
                "value": "Item 29",
                "text": "Educational and vocational training"
              },
              {
                "value": "Item 30",
                "text": "Employment, workers management, and access to self-employment"
              },
              {
                "value": "Item 31",
                "text": "Access to and enjoyment of essential private services and public services and benefits"
              },
              {
                "value": "Item 32",
                "text": "Law enforcement"
              },
              {
                "value": "Item 33",
                "text": "Migration, asylum, and border control management"
              },
              {
                "value": "Item 34",
                "text": "Administration of justice and democratic processes"
              },
              {
                "value": "Item 35",
                "text": "None of the above"
              }
            ]
          },
          {
            "type": "boolean",
            "name": "question25",
            "title": "Is your system a General Purpose AI model? \n"
          }
        ]
      },
      {
        "name": "page4",
        "title": "Design Stage : Organisation  ",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "title": "Strategy",
            "elements": [
              {
                "type": "radiogroup",
                "name": "question26",
                "title": "Do you have a strategy to deploy AI powered solutions in your organization?",
                "choices": [
                  {
                    "value": "Item 4",
                    "text": "Yes — we have a well—defined AI strategy"
                  },
                  {
                    "value": "Item 5",
                    "text": "No — we are currently in the process of developing an AI strategy"
                  },
                  {
                    "value": "Item 6",
                    "text": "No — we have not yet started to develop an AI strategy"
                  },
                  {
                    "value": "Item 7",
                    "text": "Unsure"
                  }
                ]
              },
              {
                "type": "comment",
                "name": "question27",
                "visibleIf": "{question26} = 'Item 4'",
                "title": "Describe shortly that strategy \n"
              },
              {
                "type": "radiogroup",
                "name": "question40",
                "title": "Is it clear who / what team is leading the AI strategy for your company or is it being managed in a more organic and decentralized manner?",
                "choices": [
                  {
                    "value": "Item 3",
                    "text": "There is clear leadership / ownership of our organization’s AI strategy"
                  },
                  {
                    "value": "Item 4",
                    "text": "More organic and decentralized"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question41",
                "title": "Do you have a process in place to measure the impact of the deployment of AI / AI—powered solutions?",
                "choices": [
                  {
                    "value": "Item 4",
                    "text": "Yes, we have a process and clearly defined metrics"
                  },
                  {
                    "value": "Item 5",
                    "text": "Yes, we have a process but are still working on actual metrics"
                  },
                  {
                    "value": "Item 6",
                    "text": "No, we don’t have a process or metrics, but we are likely to have this in the next 12 months"
                  },
                  {
                    "value": "Item 7",
                    "text": "No, we don’t have a process of metrics and we are unlikely to have this in the next 12 months"
                  },
                  {
                    "value": "Item 8",
                    "text": "Unsure"
                  }
                ]
              },
              {
                "type": "comment",
                "name": "question42",
                "visibleIf": "{question41} anyof ['Item 4', 'Item 5']",
                "title": "Describe that process \n"
              },
              {
                "type": "radiogroup",
                "name": "question43",
                "title": "Has your company established a financial strategy to ensure sustainable funding for AI deployment initiatives?",
                "choices": [
                  {
                    "value": "Item 4",
                    "text": "Yes — A short and long—term financial strategy is in place"
                  },
                  {
                    "value": "Item 5",
                    "text": "Yes — Only a short—term financial strategy is in place"
                  },
                  {
                    "value": "Item 6",
                    "text": "No — But we are currently underway with developing a financial strategy"
                  },
                  {
                    "value": "Item 7",
                    "text": "No — We have no plans presently to develop a financial strategy"
                  },
                  {
                    "value": "Item 8",
                    "text": "Unsure"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question44",
                "title": "How is your company prioritizing budget allocation between AI deployment and other technological initiatives? ",
                "choices": [
                  {
                    "value": "Item 4",
                    "text": "AI deployment is the highest priority for budget allocation, and we have been given an additional budget for it"
                  },
                  {
                    "value": "Item 5",
                    "text": "AI deployment is given equal priority alongside other technological initiatives. We have some additional funding available"
                  },
                  {
                    "value": "Item 6",
                    "text": "AI deployment is important, but we will have to cut spending across other technical initiatives to fund it"
                  },
                  {
                    "value": "Item 7",
                    "text": "AI deployment is important, but depends on other technical initiatives to be in place first"
                  },
                  {
                    "value": "Item 9",
                    "text": "Unsure"
                  }
                ]
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel2",
            "title": "Infastructure / Security",
            "elements": [
              {
                "type": "radiogroup",
                "name": "question47",
                "title": "How would you rate your organization's current IT infrastructure in terms of scalability and flexibility to accommodate the evolving computational needs of AI projects?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Fully adaptable: can instantly accommodate any AI computational needs"
                  },
                  {
                    "value": "Item 2",
                    "text": "Highly scalable: designed with growth and future AI demands in mind"
                  },
                  {
                    "value": "Item 3",
                    "text": "Moderately scalable: can handle current projects but need enhancements for more complex applications"
                  },
                  {
                    "value": "Item 4",
                    "text": "Limited scalability: might need significant updates for large AI projects"
                  },
                  {
                    "value": "Item 5",
                    "text": "Not scalable at all"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question48",
                "title": "Does your organization have dedicated GPU resources available and integrated for processing of AI workloads?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Robust GPU infrastructure available for current and future AI workloads"
                  },
                  {
                    "value": "Item 2",
                    "text": "Just enough GPU resources to cater to ongoing projects"
                  },
                  {
                    "value": "Item 3",
                    "text": "Limited GPU resources for experimental purposes only"
                  },
                  {
                    "value": "Item 4",
                    "text": "No, we don’t have dedicated GPU resources available currently"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question49",
                "title": "How efficiently can your organization allocate compute resources for AI tasks based on their demand?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Our systems are mostly automated and efficiently allocate resources based on AI demand"
                  },
                  {
                    "value": "Item 2",
                    "text": "We have some automated resource allocation processes, but manual intervention is often required"
                  },
                  {
                    "value": "Item 3",
                    "text": "Resource allocation for AI tasks is done manually and might not be optimal"
                  },
                  {
                    "value": "Item 4",
                    "text": "We do not have a structured approach to resource allocation for AI"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question50",
                "title": "How would you assess your current data center's network performance in terms of latency and throughput, especially for AI workloads? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Optimal: minimal issues and tailored for the most demanding AI workloads"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderately optimal: rare hiccups with current workload, but will need improvement to cater to future demand"
                  },
                  {
                    "value": "Item 3",
                    "text": "Sub optimal: we have occasional latency issues, especially with large AI workloads"
                  },
                  {
                    "value": "Item 4",
                    "text": "Not optimal: we experience frequent issues and bottlenecks"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question51",
                "title": "As your AI projects grow in complexity and data volume, how prepared is your network to adapt to these accordingly?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Fully flexible and adaptable: can accommodate any scale of AI projects instantly"
                  },
                  {
                    "value": "Item 2",
                    "text": "Highly scalable: designed with significant AI growth in mind"
                  },
                  {
                    "value": "Item 3",
                    "text": "Adequately scalable: might need periodic updates"
                  },
                  {
                    "value": "Item 4",
                    "text": "Somewhat scalable: potential bottlenecks for very large AI projects"
                  },
                  {
                    "value": "Item 5",
                    "text": "Not scalable: significant upgrades are required for large AI projects"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question52",
                "title": "How seamlessly is your network infrastructure integrated with your AI systems to facilitate efficient data flow and processing?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "High—level integration ensuring efficient data flow for most AI tasks, ensuring seamless operations across all AI projects"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate integration: we've optimized major pathways but still have occasional hiccups"
                  },
                  {
                    "value": "Item 3",
                    "text": "Some basic integrations, but often require manual adjustments"
                  },
                  {
                    "value": "Item 4",
                    "text": "No integration: our network and AI systems operate mostly in silos"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question53",
                "title": "How would you assess your organization's awareness and understanding of cybersecurity threats specific to AI and machine learning systems?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "High awareness: have a comprehensive understanding and / or regularly update our security protocols based on new threats"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate awareness: aware and have taken preliminary precautions"
                  },
                  {
                    "value": "Item 3",
                    "text": "Limited awareness: have some basic understanding but no specific measures in place"
                  },
                  {
                    "value": "Item 4",
                    "text": "Unaware of security threats specific to AI workloads"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question54",
                "title": "How does your organization ensure the protection of data utilized in AI models, especially during transit and at rest?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "End—to—end encryption with regular checks and security audits, continuous monitoring and instant threat response"
                  },
                  {
                    "value": "Item 2",
                    "text": "Advanced encryption measures in place, but may lack regular audits"
                  },
                  {
                    "value": "Item 3",
                    "text": "Basic encryption measures in place"
                  },
                  {
                    "value": "Item 4",
                    "text": "No specific encryption or protection measures"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question55",
                "title": "How equipped is your organization to detect and prevent unauthorized tampering or adversarial attacks on your AI models?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Fully equipped: have proactive monitoring and tamper detection with timely counter measures"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderately equipped: have protective measures in place but lack real—time monitoring"
                  },
                  {
                    "value": "Item 3",
                    "text": "Somewhat equipped: we are aware of the risks and have basics sorted but lack robust measures"
                  },
                  {
                    "value": "Item 4",
                    "text": "Not equipped: have not considered the cybersecurity aspect of AI workloads"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question56",
                "title": "How does your organization manage access control to AI systems and datasets?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Dynamic and granular access controls that adjust based on project needs and security levels, with real—time monitoring"
                  },
                  {
                    "value": "Item 2",
                    "text": "Advanced role—based access controls with periodic audits"
                  },
                  {
                    "value": "Item 3",
                    "text": "Basic role—based access in place but may lack regular updates"
                  },
                  {
                    "value": "Item 4",
                    "text": "Access is largely open and not specifically restricted"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question57",
                "title": "How ready is your company to deploy AI from a power consumption perspective? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Highly prepared: we have dedicated infrastructure in place to optimize power consumption in AI deployment"
                  },
                  {
                    "value": "Item 2",
                    "text": "Somewhat prepared: some measures in place to address power consumption concerns in AI deployment"
                  },
                  {
                    "value": "Item 3",
                    "text": "Not prepared: no specific measures or considerations for power consumption in AI deployment"
                  },
                  {
                    "value": "Item 4",
                    "text": "Unsure"
                  }
                ]
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel4",
            "title": "Governance",
            "elements": [
              {
                "type": "boolean",
                "name": "question34",
                "title": "Does your organisation have a defined set of values that should guide the development of AI systems"
              },
              {
                "type": "comment",
                "name": "question35",
                "visibleIf": "{question34} = true",
                "title": "Describe those values"
              },
              {
                "type": "boolean",
                "name": "question36",
                "visibleIf": "{question34} = true",
                "title": "Have those values been communicated externally ?"
              },
              {
                "type": "comment",
                "name": "question37",
                "visibleIf": "{question36} = true",
                "title": "Describe how did that communication happened/happens\n"
              },
              {
                "type": "boolean",
                "name": "question38",
                "visibleIf": "{question34} = true",
                "title": "Have these values been communicated internally ? "
              },
              {
                "type": "comment",
                "name": "question39",
                "visibleIf": "{question38} = true",
                "title": "Describe how did that communication happened/happens\n"
              },
              {
                "type": "boolean",
                "name": "question46",
                "title": "Do you have an established AI ethics review board or a similar mechanism to discuss the overall accountability and ethics practices, including potential unclear grey areas ?"
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel5",
            "title": "Stuff",
            "elements": [
              {
                "type": "radiogroup",
                "name": "question58",
                "title": "How well resourced is your company with the right level of in—house talent necessary for successful AI deployment? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Very well resourced"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderately well resourced"
                  },
                  {
                    "value": "Item 3",
                    "text": "Moderately under resourced"
                  },
                  {
                    "value": "Item 4",
                    "text": "Significantly under resourced"
                  },
                  {
                    "value": "Item 5",
                    "text": "Unsure"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question59",
                "title": "How would you describe the proficiency level of your staff in adopting and fully leveraging the AI technologies that you are deploying?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Proficient: staff are adept at leveraging tool capabilities to their fullest"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate: most staff can handle regular AI related tasks efficiently"
                  },
                  {
                    "value": "Item 3",
                    "text": "Intermediate: staff can use tools but often need guidance for advanced functions"
                  },
                  {
                    "value": "Item 4",
                    "text": "Beginner: significant training is required"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question60",
                "title": "Has your company invested in training programs to upskill existing employees in AI—related competencies?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Yes, but we hire external vendors to train our staff"
                  },
                  {
                    "value": "Item 2",
                    "text": "Yes, we have comprehensive internal training programs"
                  },
                  {
                    "value": "Item 3",
                    "text": "No, we have not implemented training programs yet but plan to in the future"
                  },
                  {
                    "value": "Item 4",
                    "text": "Unsure"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question61",
                "title": "When it comes to talent management, has your company started to think about ‘accessibility’ of AI technologies for employees who are differently abled?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Yes, it is a core part of our AI strategy and talent planning"
                  },
                  {
                    "value": "Item 2",
                    "text": "Yes, we have thought about it, but there are no clear answers"
                  },
                  {
                    "value": "Item 3",
                    "text": "Yes, we are aware but we don’t build these AI tools so we can’t control this aspect"
                  },
                  {
                    "value": "Item 4",
                    "text": "No, this is not a consideration at this time"
                  }
                ]
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel6",
            "title": "Culture",
            "elements": [
              {
                "type": "radiogroup",
                "name": "question62",
                "title": "How urgently is your organization looking to embrace AI?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "High urgency: the move to embrace AI is seen as highly important and urgent"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate urgency: embracing AI is seen as important but the organization is not acting with urgency"
                  },
                  {
                    "value": "Item 3",
                    "text": "Limited urgency: embracing AI is seen as an inevitable driver of some change but not important or critical"
                  },
                  {
                    "value": "Item 4",
                    "text": "No urgency: there is no discussion or momentum around embracing AI within the organization"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question63",
                "title": "How receptive is your Board to embracing the changes brought about by AI?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "High receptiveness: widespread acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate receptiveness: general acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 3",
                    "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt"
                  },
                  {
                    "value": "Item 4",
                    "text": "Not receptive: resistant to change and will struggle to adapt"
                  },
                  {
                    "value": "Item 5",
                    "text": "Unsure: I don’t know"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question64",
                "title": "How receptive is your Leadership Team to embracing the changes brought about by AI? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "High receptiveness: widespread acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate receptiveness: general acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 3",
                    "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt"
                  },
                  {
                    "value": "Item 4",
                    "text": "Not receptive: resistant to change and will struggle to adapt"
                  },
                  {
                    "value": "Item 5",
                    "text": "Unsure: I don’t know"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question65",
                "title": "How receptive is your Middle Management to embracing the changes brought about by AI?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "High receptiveness: widespread acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate receptiveness: general acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 3",
                    "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt"
                  },
                  {
                    "value": "Item 4",
                    "text": "Not receptive: resistant to change and will struggle to adapt"
                  },
                  {
                    "value": "Item 5",
                    "text": "Unsure: I don’t know"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question66",
                "title": "How receptive is your Employees to embracing the changes brought about by AI? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "High receptiveness: widespread acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 2",
                    "text": "Moderate receptiveness: general acceptance and willingness to adopt"
                  },
                  {
                    "value": "Item 3",
                    "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt"
                  },
                  {
                    "value": "Item 4",
                    "text": "Not receptive: resistant to change and will struggle to adapt"
                  },
                  {
                    "value": "Item 5",
                    "text": "Unsure: I don’t know"
                  }
                ]
              },
              {
                "type": "boolean",
                "name": "question67",
                "title": "Do you have a change management plan in place to address the changes brought about by deploying AI technologies?"
              },
              {
                "type": "radiogroup",
                "name": "question68",
                "title": "How would you assess the quality and depth of the change management plan? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Comprehensive: have thought through every aspect"
                  },
                  {
                    "value": "Item 2",
                    "text": "In progress: we have some areas fully covered; others are under review"
                  },
                  {
                    "value": "Item 3",
                    "text": "Draft: just started developing"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "page5",
        "title": "Design State : Use case",
        "elements": [
          {
            "type": "panel",
            "name": "panel7",
            "title": "What will the system actually do ?",
            "elements": [
              {
                "type": "comment",
                "name": "question30",
                "title": "Write a short description of the defined and documented objectives of the AI application ?"
              },
              {
                "type": "comment",
                "name": "question31",
                "title": "What client needs will the system address and how will this system meet them? "
              },
              {
                "type": "checkbox",
                "name": "question32",
                "title": "How were those client needs identified ?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Surveys among the appropriate demographics"
                  },
                  {
                    "value": "Item 2",
                    "text": "Market research for similar products"
                  },
                  {
                    "value": "Item 3",
                    "text": "Consultation with professionals from different fields , public institutions or NGOs"
                  }
                ],
                "showOtherItem": true,
                "showNoneItem": true,
                "noneText": "None of the aforementioned things happen"
              },
              {
                "type": "comment",
                "name": "question33",
                "visibleIf": "{question32} anyof ['Item 2', 'Item 1', 'Item 3', 'other']",
                "title": "How did that consultation happen and to what extent ? "
              },
              {
                "type": "comment",
                "name": "question75",
                "title": "What problem is being solved ?\n"
              },
              {
                "type": "radiogroup",
                "name": "question76",
                "title": "What area is being impacted by automation ?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Health related services"
                  },
                  {
                    "value": "Item 2",
                    "text": "Economic interests (grants and contributions, tax benefits, debt collection)"
                  },
                  {
                    "value": "Item 3",
                    "text": "Social assistance (employment insurance, disability claims)"
                  },
                  {
                    "value": "Item 4",
                    "text": "Access and mobility (security clearances, border crossings)"
                  },
                  {
                    "value": "Item 5",
                    "text": "Licensing and issuance of permits"
                  },
                  {
                    "value": "Item 6",
                    "text": "Employment (recruitment, hiring, promotion, performance evaluation, monitoring, security clearance)"
                  },
                  {
                    "value": "Item 7",
                    "text": "Legal matters ( judiciary, police, prosecutor’s office, civil rights )"
                  },
                  {
                    "value": "Item 8",
                    "text": "Environmental protection"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "comment",
                "name": "question101",
                "title": " Please describe the output produced by the system and any relevant information needed to interpret it in the context of the administrative decision."
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel8",
            "title": "What about the stakeholders ?",
            "elements": [
              {
                "type": "comment",
                "name": "question29",
                "title": "Who are the stakeholders who will be affected by this system? \n"
              },
              {
                "type": "comment",
                "name": "question69",
                "title": "For each stakeholder document the potential benefit and potential harms"
              },
              {
                "type": "boolean",
                "name": "question87",
                "title": "Did you consider a mechanism to include the participation of the widest range of possible stakeholders in the AI system's design and development ?"
              },
              {
                "type": "radiogroup",
                "name": "question88",
                "title": "Based on your answers to the previous questions, how would you rate the measures you put in place to ensure the involvement of the relevant stakeholders? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Non-existent"
                  },
                  {
                    "value": "Item 2",
                    "text": "Completely inadequate"
                  },
                  {
                    "value": "Item 3",
                    "text": "Almost adequate"
                  },
                  {
                    "value": "Item 4",
                    "text": "Adequate"
                  },
                  {
                    "value": "Item 5",
                    "text": "Fully adequate"
                  }
                ]
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel9",
            "title": "Should you use AI for this ?",
            "elements": [
              {
                "type": "radiogroup",
                "name": "question70",
                "title": " Which of the following best describes the type of automation you are planning?\n",
                "choices": [
                  {
                    "value": "Item 3",
                    "text": "Full automation (the system will make an administrative decision)"
                  },
                  {
                    "value": "Item 4",
                    "text": "Partial automation (the system will contribute to administrative decision-making by supporting an officer through assessments, recommendations, intermediate decisions, or other outputs)"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question102",
                "title": "Choose what represents the system best.",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "People will be responsible for troubleshooting triggered by system alerts but will not otherwise oversee system operation. For example, an AI system that generates keywords from unstructured text alerts the operator of errors, such as improper format of submission files."
                  },
                  {
                    "value": "Item 2",
                    "text": "The system will support effective hand-off to people but will be designed to automate most use. For example, an AI system that generates keywords from unstructured text that can be configured by system admins to alert the operator when keyword generation falls below a certain confidence threshold."
                  },
                  {
                    "value": "Item 3",
                    "text": "The system will require effective hand-off to people but will be designed to automate most use. For example, an AI system that generates keywords from unstructured text alerts the operator when keyword generation falls below a certain confidence threshold (regardless of system admin configuration)."
                  },
                  {
                    "value": "Item 4",
                    "text": "People will evaluate system outputs and can intervene before any action is taken: the system will proceed unless the reviewer intervenes. For example, an AI system that generates keywords from unstructured text will deliver the generated keywords for operator review but will finalize the results unless the operator intervenes."
                  },
                  {
                    "value": "Item 5",
                    "text": "People will make decisions based on output provided by the system: the system will not proceed unless a person approves. For example, an AI system that generates keywords from unstructured text but does not finalize the results without review and approval from the operator"
                  }
                ]
              },
              {
                "type": "checkbox",
                "name": "question104",
                "title": "Please describe whether the AI system",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Is a self-learning or autonomous system"
                  },
                  {
                    "value": "Item 2",
                    "text": "Is overseen by a human-in-the-loop"
                  },
                  {
                    "value": "Item 3",
                    "text": "Is overseen by a human-on-the-loop"
                  },
                  {
                    "value": "Item 4",
                    "text": "Is overseen by a human-in-command"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "comment",
                "name": "question82",
                "title": "To what specific process does the automation relate? "
              },
              {
                "type": "comment",
                "name": "question78",
                "title": "Please describe the role of the system in the decision-making process"
              },
              {
                "type": "comment",
                "name": "question86",
                "title": "On what legal basis is the algorithm for automated decision-making (hereafter also the „system”) implemented?"
              },
              {
                "type": "checkbox",
                "name": "question28",
                "title": " What is motivating your team to introduce automation into this decision-making process? ",
                "choices": [
                  {
                    "value": "Item 4",
                    "text": "Existing backlog of work or cases"
                  },
                  {
                    "value": "Item 5",
                    "text": "Improve overall quality of decisions"
                  },
                  {
                    "value": "Item 6",
                    "text": "Lower transaction costs of an existing program"
                  },
                  {
                    "value": "Item 7",
                    "text": "The system is performing tasks that humans could not accomplish in a reasonable period of time"
                  },
                  {
                    "value": "Item 8",
                    "text": "Use innovative approaches"
                  },
                  {
                    "value": "Item 9",
                    "text": "Eliminating delays in the current system"
                  },
                  {
                    "value": "Item 10",
                    "text": "Increasing the availability of services for the citizen"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "boolean",
                "name": "question71",
                "title": "Will the system be making decisions or assessments that require judgement or discretion?"
              },
              {
                "type": "boolean",
                "name": "question72",
                "title": "Will the system perform an assessment or other operation that would not otherwise be completed by a human?  "
              },
              {
                "type": "comment",
                "name": "question81",
                "visibleIf": "{question72} = true",
                "title": "Describe the relevant function(s) of the system. "
              },
              {
                "type": "boolean",
                "name": "question73",
                "title": "Have attempts been made to implement process changes by methods other than automation?"
              },
              {
                "type": "comment",
                "name": "question74",
                "visibleIf": "{question73} = true",
                "title": " If so, why did they fail?"
              },
              {
                "type": "boolean",
                "name": "question77",
                "title": "Does your system rely on the initiative, cooperation or trust of persons  concerned?"
              },
              {
                "type": "radiogroup",
                "name": "question83",
                "title": "How would you rate the persons concerned trust of AI systems for that use case ? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Very High - People are waiting for AI developments in that area and they have prior experience with similar systems"
                  },
                  {
                    "value": "Item 2",
                    "text": "High - People are waiting for AI developments in that area but they haven't prior experience with similar systems"
                  },
                  {
                    "value": "Item 3",
                    "text": "Normal - People are indifferent about AI developments in that area"
                  },
                  {
                    "value": "Item 4",
                    "text": "Low - People are suspicious of AI developments in that area but they haven't prior experience with similar systems"
                  },
                  {
                    "value": "Item 5",
                    "text": "Very Low - People are suspicious of AI developments in that area due to prior bad experience with similar systems"
                  }
                ]
              },
              {
                "type": "radiogroup",
                "name": "question103",
                "title": "How likely is it that a lack of knowledge of the AI system among its users will result in harm to individuals or communities?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Very likely"
                  },
                  {
                    "value": "Item 2",
                    "text": "Likely"
                  },
                  {
                    "value": "Item 3",
                    "text": "Neutral"
                  },
                  {
                    "value": "Item 4",
                    "text": "Not very likely"
                  },
                  {
                    "value": "Item 5",
                    "text": "Not likely"
                  }
                ]
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel3",
            "title": "Can this go very badly ?",
            "elements": [
              {
                "type": "boolean",
                "name": "question45",
                "title": "Is the project within an area of intense public scrutiny (e.g. because of privacy concerns) and/or frequent litigation? "
              },
              {
                "type": "boolean",
                "name": "question79",
                "title": "Are clients in this line of business particularly vulnerable?"
              },
              {
                "type": "checkbox",
                "name": "question80",
                "visibleIf": "{question79} = true",
                "title": "Why is that ?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "They are a part of a historically marginalised group (due to race, ethnicity, gender, sexual orientation, religious or political beliefs etc)"
                  },
                  {
                    "value": "Item 2",
                    "text": "They are disabled/dealing with health issues"
                  },
                  {
                    "value": "Item 3",
                    "text": "They are in a vulnerable emotional state / easily manipulated"
                  },
                  {
                    "value": "Item 4",
                    "text": "They are children"
                  },
                  {
                    "value": "Item 5",
                    "text": "They are not technologically literate"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "radiogroup",
                "name": "question84",
                "title": " Are the impacts resulting from the decision reversible? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Very easily reversible"
                  },
                  {
                    "value": "Item 2",
                    "text": "Easily reversible"
                  },
                  {
                    "value": "Item 3",
                    "text": "Neutral"
                  },
                  {
                    "value": "Item 4",
                    "text": "Difficult to reverse"
                  },
                  {
                    "value": "Item 5",
                    "text": "Very difficult to reverse"
                  }
                ]
              },
              {
                "type": "comment",
                "name": "question85",
                "title": "Please describe why the impacts resulting from the decision are as per selected option above."
              },
              {
                "type": "radiogroup",
                "name": "question89",
                "title": " How long will impacts from the decision last?",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "seconds"
                  },
                  {
                    "value": "Item 2",
                    "text": "minutes"
                  },
                  {
                    "value": "Item 3",
                    "text": "hours"
                  },
                  {
                    "value": "Item 4",
                    "text": "days"
                  },
                  {
                    "value": "Item 5",
                    "text": "years"
                  }
                ]
              },
              {
                "type": "comment",
                "name": "question90",
                "title": "Please describe why the impacts resulting from the decision are as per selected option above. "
              },
              {
                "type": "checkbox",
                "name": "question93",
                "title": "The decision might have a negative impact on the autonomy of the persons involved in the following ways:",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Autonomy/agency loss"
                  },
                  {
                    "value": "Item 2",
                    "text": "Impersonation/identity theft"
                  },
                  {
                    "value": "Item 3",
                    "text": "IP/copyright loss"
                  },
                  {
                    "value": "Item 4",
                    "text": "Personality rights loss"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question94",
                "title": "The decision might cause physical harm on the persons involved in the following ways :",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Bodily injury"
                  },
                  {
                    "value": "Item 2",
                    "text": "Loss of life"
                  },
                  {
                    "value": "Item 3",
                    "text": "Personal health deterioration"
                  },
                  {
                    "value": "Item 4",
                    "text": "Property damage"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question95",
                "title": "The decision might have a negative psychological impact on the persons involved in the following ways :",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Addiction"
                  },
                  {
                    "value": "Item 2",
                    "text": "Alienation/isolation"
                  },
                  {
                    "value": "Item 3",
                    "text": "Anxiety/distress"
                  },
                  {
                    "value": "Item 4",
                    "text": "Coercion/manipulation"
                  },
                  {
                    "value": "Item 5",
                    "text": "Dehumanisation/objectification"
                  },
                  {
                    "value": "Item 6",
                    "text": "Harassement/abuse/intimidation"
                  },
                  {
                    "value": "Item 7",
                    "text": "Over-reliance"
                  },
                  {
                    "value": "Item 8",
                    "text": "Radicalisation"
                  },
                  {
                    "value": "Item 9",
                    "text": "Self-harm"
                  },
                  {
                    "value": "Item 10",
                    "text": "Sexualization"
                  },
                  {
                    "value": "Item 11",
                    "text": "Trauma"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question92",
                "title": "The system might cause reputational harm to the persons involved in the following ways \n",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Defamation/libel/slander"
                  },
                  {
                    "value": "Item 2",
                    "text": "Loss of confidence/trust"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question96",
                "title": "The decision might cause business or financial harm to the persons involved in the following of ways",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Business operations / infrastructure damage"
                  },
                  {
                    "value": "Item 2",
                    "text": "Confidentiality loss"
                  },
                  {
                    "value": "Item 3",
                    "text": "Financial/earnings loss"
                  },
                  {
                    "value": "Item 4",
                    "text": "Livelihood loss"
                  },
                  {
                    "value": "Item 5",
                    "text": "Monopolisation"
                  },
                  {
                    "value": "Item 6",
                    "text": "Opportunity loss"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question97",
                "title": "The decision might have a negative impact on human rights and civil liberties in the following ways \n",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Benefits / entitlements loss"
                  },
                  {
                    "value": "Item 2",
                    "text": "Dignity loss"
                  },
                  {
                    "value": "Item 3",
                    "text": "Discrimination"
                  },
                  {
                    "value": "Item 4",
                    "text": "Loss of freedom of speech/expression"
                  },
                  {
                    "value": "Item 5",
                    "text": "Loss of freedom of assembly/association"
                  },
                  {
                    "value": "Item 6",
                    "text": "Loss of social rights and access to public services"
                  },
                  {
                    "value": "Item 7",
                    "text": "Loss of right to information"
                  },
                  {
                    "value": "Item 8",
                    "text": "Loss of right to free elections"
                  },
                  {
                    "value": "Item 9",
                    "text": "Loss of right to liberty and security"
                  },
                  {
                    "value": "Item 10",
                    "text": "Loss of right to due process"
                  },
                  {
                    "value": "Item 11",
                    "text": "Privacy loss"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question98",
                "title": "The decision might have a negative political economic impact in these ways :",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Critical infrastructure damage"
                  },
                  {
                    "value": "Item 2",
                    "text": "Economic instability"
                  },
                  {
                    "value": "Item 3",
                    "text": "Power concentration"
                  },
                  {
                    "value": "Item 4",
                    "text": "Electoral interference"
                  },
                  {
                    "value": "Item 5",
                    "text": "Institutional trust loss"
                  },
                  {
                    "value": "Item 6",
                    "text": "Political instability"
                  },
                  {
                    "value": "Item 7",
                    "text": "Political manipulation"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question99",
                "title": "The decision might have a negative environmental impact in these ways :",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Biodiversity loss"
                  },
                  {
                    "value": "Item 2",
                    "text": "Carbon emissions"
                  },
                  {
                    "value": "Item 3",
                    "text": "Electronic waste"
                  },
                  {
                    "value": "Item 4",
                    "text": "Excessive energy consumption"
                  },
                  {
                    "value": "Item 5",
                    "text": "Excessive landfil"
                  },
                  {
                    "value": "Item 6",
                    "text": "Excessive water consumption"
                  },
                  {
                    "value": "Item 7",
                    "text": "Natural resource extraction"
                  },
                  {
                    "value": "Item 8",
                    "text": "Pollution"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "checkbox",
                "name": "question91",
                "title": "Does the system impact working conditions within the implementing authority? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "The system create the risk of de-skilling your staff"
                  },
                  {
                    "value": "Item 2",
                    "text": "The system promotes or requires new (digital) skills"
                  },
                  {
                    "value": "Item 3",
                    "text": "The system requires special abilities not yet available in your existing staff."
                  },
                  {
                    "value": "Item 4",
                    "text": "The system reduces the number of staff required in your administrative agency,"
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "comment",
                "name": "question100",
                "title": "How could this system be unintentionally or intentionally misused? "
              }
            ]
          }
        ]
      },
      {
        "name": "page6",
        "title": "Development Stage : Data ",
        "elements": [
          {
            "type": "panel",
            "name": "panel10",
            "title": "Data Source ",
            "elements": [
              {
                "type": "comment",
                "name": "question116",
                "title": "Describe this system's inputs and outputs"
              },
              {
                "type": "text",
                "name": "question117",
                "title": "Who was in charge of the data selection process?\n"
              },
              {
                "type": "boolean",
                "name": "question112",
                "title": "Is the dataset static (ie fixed and clearly defined) or is it dynamic (ie continuously fed with new data)?\n",
                "labelTrue": "Dynamic",
                "labelFalse": "Static"
              },
              {
                "type": "comment",
                "name": "question152",
                "visibleIf": "{question112} = true",
                "title": "Which mechanism is implemented to ensure the quality of the data used continuously? "
              },
              {
                "type": "comment",
                "name": "question153",
                "visibleIf": "{question112} = true",
                "title": "Are regular mechanisms in place to assess the risk of loss of quality or changes in data distribution? "
              },
              {
                "type": "radiogroup",
                "name": "question113",
                "title": "Is the training data reused (reuse of an internal or publicly accessible database, acquisition, etc.) or is it collected specifically",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "All of the data are publicly available"
                  },
                  {
                    "value": "Item 2",
                    "text": "All of the data are collected specifically for this app"
                  },
                  {
                    "value": "Item 3",
                    "text": "A mix of both"
                  }
                ]
              },
              {
                "type": "boolean",
                "name": "question118",
                "visibleIf": "{question113} anyof ['Item 3', 'Item 1']",
                "title": "If reused, has the database been compiled in accordance with data protection regulations?"
              },
              {
                "type": "boolean",
                "name": "question107",
                "title": "Will the system use data from multiple different sources?"
              },
              {
                "type": "comment",
                "name": "question114",
                "title": "Name those sources"
              },
              {
                "type": "boolean",
                "name": "question115",
                "title": "Will the system make direct use of data taken from devices belonging to citizens or economic operators? "
              },
              {
                "type": "boolean",
                "name": "question108",
                "title": "Will the system require input data from an Internet- or telephony-connected device? (e.g. Internet of Things, sensor) ?"
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel13",
            "title": "Data Privacy",
            "elements": [
              {
                "type": "boolean",
                "name": "question105",
                "title": "Will the system use personal information as input data? "
              },
              {
                "type": "radiogroup",
                "name": "question106",
                "title": "What is the highest security classification of the input data used by the system? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "None"
                  },
                  {
                    "value": "Item 2",
                    "text": "Protected A"
                  },
                  {
                    "value": "Item 3",
                    "text": "Classified-Confidential"
                  },
                  {
                    "value": "Item 4",
                    "text": "Protected B-Protected C"
                  },
                  {
                    "value": "Item 5",
                    "text": "Secret-Top Secret"
                  }
                ]
              },
              {
                "type": "boolean",
                "name": "question110",
                "title": " Are there risks related to increased surveillance due to your data gathering process?"
              },
              {
                "type": "comment",
                "name": "question111",
                "title": "Explain your answer to the above question. "
              },
              {
                "type": "boolean",
                "name": "question109",
                "title": "Does the system assume the use of special categories of personal data as defined by the GDPR?"
              },
              {
                "type": "boolean",
                "name": "question124",
                "title": "Does the way in which the datasets used for training are produced meet the minimisation principle? "
              },
              {
                "type": "boolean",
                "name": "question125",
                "title": "Is the data anonymised?"
              },
              {
                "type": "comment",
                "name": "question126",
                "visibleIf": "{question125} = true",
                "title": "If yes, how?\n"
              },
              {
                "type": "boolean",
                "name": "question127",
                "title": "Is it pseudonymised?"
              },
              {
                "type": "comment",
                "name": "question128",
                "visibleIf": "{question127} = true",
                "title": "If yes, how?"
              },
              {
                "type": "boolean",
                "name": "question129",
                "title": "Have the risks of re-identification been assessed?"
              },
              {
                "type": "boolean",
                "name": "question131",
                "title": "Are all the variables considered for training the model necessary? Could the collection of some values be avoided should they prove not to be useful for learning, especially if they involve sensitive data?"
              },
              {
                "type": "boolean",
                "name": "question132",
                "title": "If the collection of these values cannot be avoided, could the data be removed or hidden? "
              },
              {
                "type": "boolean",
                "name": "question148",
                "title": "Sensitive data (health, criminal records, etc.) can only be processed if it meets one of the exceptions set out in Article 9 of the GDPR. Does this apply to your data?"
              },
              {
                "type": "comment",
                "name": "question149",
                "visibleIf": "{question148} = true",
                "title": "If yes, on which of these exceptions is the processing based? "
              },
              {
                "type": "boolean",
                "name": "question150",
                "title": "Is the compliance of training data processing monitored (completion of a DPIA, analysis of the risks of re-identification, etc.)?"
              },
              {
                "type": "comment",
                "name": "question151",
                "visibleIf": "{question150} = true",
                "title": "If yes, how ?"
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel11",
            "title": "Type of Data",
            "elements": [
              {
                "type": "radiogroup",
                "name": "question130",
                "title": "Is the volume of data collected justified in view of the difficulty of the learning task? ",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "Yes, we used the absolute bare minimum for accuracy"
                  },
                  {
                    "value": "Item 2",
                    "text": "We used a moderate amount"
                  },
                  {
                    "value": "Item 3",
                    "text": "We used way more than needed just to be sure"
                  }
                ]
              },
              {
                "type": "boolean",
                "name": "question133",
                "title": "Is there an annotation method being used?"
              },
              {
                "type": "boolean",
                "name": "question134",
                "visibleIf": "{question133} = true",
                "title": "If yes, is it checked?"
              },
              {
                "type": "boolean",
                "name": "question135",
                "title": "Is it performed by humans?"
              },
              {
                "type": "boolean",
                "name": "question136",
                "visibleIf": "{question135} = true",
                "title": "If yes, have they been trained?\n"
              },
              {
                "type": "boolean",
                "name": "question137",
                "visibleIf": "{question135} = true",
                "title": "Is the quality of their work monitored?"
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel12",
            "visibleIf": "{question138} = true",
            "title": "Data Quality ",
            "elements": [
              {
                "type": "boolean",
                "name": "question119",
                "title": "Is the method used to collect training data sufficiently well known?"
              },
              {
                "type": "comment",
                "name": "question145",
                "title": "Describe it :"
              },
              {
                "type": "boolean",
                "name": "question146",
                "title": "Is there a possibility of bias due to the method used or the specific collection conditions? "
              },
              {
                "type": "comment",
                "name": "question147",
                "title": "Explain :"
              },
              {
                "type": "checkbox",
                "name": "question120",
                "title": "Check all that applies. The data have been checked for : \n",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "uniqueness"
                  },
                  {
                    "value": "Item 2",
                    "text": "completeness"
                  },
                  {
                    "value": "Item 3",
                    "text": "accuracy"
                  },
                  {
                    "value": "Item 4",
                    "text": "timeliness"
                  },
                  {
                    "value": "Item 5",
                    "text": "consistency"
                  },
                  {
                    "value": "Item 6",
                    "text": "currency"
                  }
                ]
              },
              {
                "type": "comment",
                "name": "question121",
                "title": "Describe how that happened "
              },
              {
                "type": "checkbox",
                "name": "question122",
                "title": "Does the training data include data related to the particular characteristics of the individuals such as :",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "sex"
                  },
                  {
                    "value": "Item 2",
                    "text": "gender identity"
                  },
                  {
                    "value": "Item 3",
                    "text": "race"
                  },
                  {
                    "value": "Item 4",
                    "text": "colour"
                  },
                  {
                    "value": "Item 5",
                    "text": "ethnic origin"
                  },
                  {
                    "value": "Item 6",
                    "text": "social origin"
                  },
                  {
                    "value": "Item 7",
                    "text": "genetic features"
                  },
                  {
                    "value": "Item 8",
                    "text": "language"
                  },
                  {
                    "value": "Item 9",
                    "text": "religion or belief"
                  },
                  {
                    "value": "Item 10",
                    "text": "political or any other opinion"
                  },
                  {
                    "value": "Item 11",
                    "text": "membership of a national minority"
                  },
                  {
                    "value": "Item 12",
                    "text": "property"
                  },
                  {
                    "value": "Item 13",
                    "text": "place of birth"
                  },
                  {
                    "value": "Item 14",
                    "text": "disability"
                  },
                  {
                    "value": "Item 15",
                    "text": "age"
                  },
                  {
                    "value": "Item 16",
                    "text": "sexual orientation"
                  }
                ]
              },
              {
                "type": "boolean",
                "name": "question142",
                "title": "Have the hypotheses made based on the training data been discussed, clearly documented and checked against the actual situation?"
              },
              {
                "type": "boolean",
                "name": "question143",
                "title": "Has a study of the correlations between these particular characteristics and the rest of the training data been carried out to identify possible proxies?"
              },
              {
                "type": "checkbox",
                "name": "question141",
                "title": "Have you checked whether the system potentially negatively discriminates against people on the basis of any of the following grounds",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "sex"
                  },
                  {
                    "value": "Item 2",
                    "text": "gender identity"
                  },
                  {
                    "value": "Item 3",
                    "text": "race"
                  },
                  {
                    "value": "Item 4",
                    "text": "colour"
                  },
                  {
                    "value": "Item 5",
                    "text": "ethnic origin"
                  },
                  {
                    "value": "Item 6",
                    "text": "social origin"
                  },
                  {
                    "value": "Item 7",
                    "text": "genetic features"
                  },
                  {
                    "value": "Item 8",
                    "text": "language"
                  },
                  {
                    "value": "Item 9",
                    "text": "religion or belief"
                  },
                  {
                    "value": "Item 10",
                    "text": "political or any other opinion"
                  },
                  {
                    "value": "Item 11",
                    "text": "membership of a national minority"
                  },
                  {
                    "value": "Item 12",
                    "text": "property"
                  },
                  {
                    "value": "Item 13",
                    "text": "place of birth"
                  },
                  {
                    "value": "Item 14",
                    "text": "disability"
                  },
                  {
                    "value": "Item 15",
                    "text": "age"
                  },
                  {
                    "value": "Item 16",
                    "text": "sexual orientation"
                  }
                ]
              },
              {
                "type": "checkbox",
                "name": "question123",
                "title": "For the attributes you checked above",
                "choices": [
                  {
                    "value": "Item 1",
                    "text": "You considered diversity and representativeness of persons concerned in the data"
                  },
                  {
                    "value": "Item 2",
                    "text": "You tested for specific target groups or problematic use cases"
                  },
                  {
                    "value": "Item 3",
                    "text": "You established a definition of fairness commonly used and implemented in any phase of the process of setting up the system"
                  },
                  {
                    "value": "Item 4",
                    "text": "You establish mechanisms to ensure fairness in your system"
                  },
                  {
                    "value": "Item 5",
                    "text": "You consulted with representatives of said groups to make an informed decision about your definition of fairness."
                  }
                ],
                "showOtherItem": true
              },
              {
                "type": "comment",
                "name": "question144",
                "title": "Describe how the bias study has been carried out "
              },
              {
                "type": "boolean",
                "name": "question138",
                "title": "Is the data used representative of the data observed in the actual environment? "
              },
              {
                "type": "comment",
                "name": "question139",
                "title": "Which methodology has been used to ensure this representativeness?"
              },
              {
                "type": "comment",
                "name": "question140",
                "visibleIf": "{question138} = true",
                "title": "Has a formalised study of this representativeness been carried out? "
              }
            ]
          }
        ]
      },
      {
        "name": "page7",
        "title": "Development Stage : Model "
      },
      {
        "name": "page8",
        "title": "Evaluation Stage "
      },
      {
        "name": "page9",
        "title": "Operation Stage "
      },
      {
        "name": "page10",
        "title": "Retirement Stage "
      }
    ]
  }