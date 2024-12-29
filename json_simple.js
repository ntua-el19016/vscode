const json_simple = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "choices": [
              "Item1-01",
              "Item2-02",
              "Item3-03"
            ]
          },
          {
            "type": "rating",
            "name": "question2"
          },
          {
            "type": "checkbox",
            "name": "question3",
            "choices": [
              "Item1-05",
              "Item2-08",
              "Item3-07"
            ]
          },
          {
            "type": "dropdown",
            "name": "question4",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "tagbox",
            "name": "question5",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "boolean",
            "name": "question6"
          },
          {
            "type": "file",
            "name": "question7"
          },
          {
            "type": "imagepicker",
            "name": "question8",
            "choices": [
              {
                "value": "Image 1",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "value": "Image 2",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                "value": "Image 3",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                "value": "Image 4",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ],
            "imageFit": "cover"
          },
          {
            "type": "ranking",
            "name": "question9",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "text",
            "name": "question10"
          },
          {
            "type": "comment",
            "name": "question11"
          },
          {
            "type": "multipletext",
            "name": "question12",
            "items": [
              {
                "name": "text1"
              },
              {
                "name": "text2"
              }
            ]
          },
          {
            "type": "matrix",
            "name": "question13",
            "columns": [
              "Column 1",
              "Column 2",
              "Column 3"
            ],
            "rows": [
              "Row 1",
              "Row 2"
            ]
          },
          {
            "type": "matrixdropdown",
            "name": "question14",
            "columns": [
              {
                "name": "Column 1"
              },
              {
                "name": "Column 2"
              },
              {
                "name": "Column 3"
              }
            ],
            "choices": [
              1,
              2,
              3,
              4,
              5
            ],
            "rows": [
              "Row 1",
              "Row 2"
            ]
          }
        ]
      }
    ]
  }