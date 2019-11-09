// // let yes = () => {
// // }
    
//     //Prepare form data
// let formData = new FormData();
//     formData.append({"file": fileToUpload});
//     formData.append({"url": responseFromTheBackend.data});
//     formData.append({"language" : "eng"});
//     formData.append({"apikey"  : process.env.REACT_APP_OCR});
//     formData.append({"isOverlayRequired": True});
// //Send OCR Parsing request asynchronously
//     $.ajax({
//     url: "https://api.ocr.space/parse/image",
//     data: formData,
//     dataType: 'json',
//     cache: false,
//     contentType: false,
//     processData: false,
//     type: 'POST',
//         success: (ocrParsedResult) => {
//         //Get the parsed results, exit code and error message and details
//             let parsedResults = ocrParsedResult["ParsedResults"];
//             let ocrExitCode = ocrParsedResult["OCRExitCode"];
//             let isErroredOnProcessing = ocrParsedResult["IsErroredOnProcessing"];
//             let errorMessage = ocrParsedResult["ErrorMessage"];
//             let errorDetails = ocrParsedResult["ErrorDetails"];
//             let processingTimeInMilliseconds = ocrParsedResult["ProcessingTimeInMilliseconds"];
//             //If we have got parsed results, then loop over the results to do something
//                 if (parsedResults!= null) {
//                 //Loop through the parsed results
//                     $.each(parsedResults, (index, value) => {
//                         let exitCode = value["FileParseExitCode"];
//                         let parsedText = value["ParsedText"]; //++++++++++++++++++++++++++++++++++++++++++++++++
//                         let errorMessage = value["ParsedTextFileName"];
//                         let errorDetails = value["ErrorDetails"];

//                         let textOverlay = value["TextOverlay"];
//                         let pageText = '';
//                             switch (+exitCode) {
//                                 case 1:
//                                 pageText = parsedText;
//                                 break;
//                                 case 0:
//                                 case -10:
//                                 case -20:
//                                 case -30:
//                                 case -99:
//                                 default:
//                                 pageText += "Error: " + errorMessage;
//                                 break;
//                             }

//                         $.each(textOverlay["Lines"], (index, value) => {

//                         // LOOP THROUGH THE LINES AND GET WORDS TO DISPLAY ON TOP OF THE IMAGE AS OVERLAY
//                         console.log(parsedText);
                        

//                         });


//                         // YOUR CODE HERE

//                     });
//                 }
//         }
//     });

