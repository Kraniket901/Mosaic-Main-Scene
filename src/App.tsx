import { useCallback, useState, useEffect } from "react";
import { animated } from "react-spring";
import "./App.css";
import { io } from "socket.io-client";
import axios from "axios";
/**
 * Represents the main App component.
 * @component
 */
const socket = io("https://mosaic-api.gokapturehub.com/", {
  transports: ["websocket", "polling", "flashsocket"],
});
function App() {
  const [queue, setQueue] = useState<any>([]);
  /** State to check whether to hide the Tool Bar or Not
   * @default false
   */
  const [hide, setHide] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  /** Number of rows in the grid */
  const [numRows, setNumRows] = useState<number>(3);

  /** Number of columns in the grid */
  const [numCols, setNumCols] = useState<number>(3);

  /** Width of each grid cell (in pixels) */
  const [cellWidth, setCellWidth] = useState<number>(100);

  /** Height of each grid cell (in pixels) */
  const [cellHeight, setCellHeight] = useState<number>(100);

  /** Data representing images in the grid */
  const [gridData, setGridData] = useState<
    Array<{
      imageId: number;
      row: number;
      col: number;
      url: string;
    }>
  >([]);

  // const [setIsAddingImage] = useState<boolean>(false);
  useEffect(() => {
    // axios.get("https://mosaic-api.gokapturehub.com/cache-images").then((e) => {
      // setGridData()
      const e = // 20231209220023
      // https://mosaic-api.gokapturehub.com/cache-images
      
      [
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4246f5db-2731-44c1-9ba2-1ee8914ba682.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1774e1e9-bbcc-43d1-b7e0-8f81443e7a82.png"
            ],
            "coords": [
              17,
              29
            ]
          },
          {
            "url": [
              "https://anime-faceswap-28th-oct.s3.ap-south-1.amazonaws.com/Frame+10.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1774e1e9-bbcc-43d1-b7e0-8f81443e7a82.png"
            ],
            "coords": [
              8,
              8
            ]
          },
          {
            "url": [
              "https://anime-faceswap-28th-oct.s3.ap-south-1.amazonaws.com/R10C5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1774e1e9-bbcc-43d1-b7e0-8f81443e7a82.png"
            ],
            "coords": [
              10,
              5
            ]
          },
          {
            "url": [
              "https://anime-faceswap-28th-oct.s3.ap-south-1.amazonaws.com/R11C21.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1774e1e9-bbcc-43d1-b7e0-8f81443e7a82.png"
            ],
            "coords": [
              11,
              21
            ]
          },
          {
            "url": [
              "https://anime-faceswap-28th-oct.s3.ap-south-1.amazonaws.com/R1C24.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1774e1e9-bbcc-43d1-b7e0-8f81443e7a82.png"
            ],
            "coords": [
              1,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/28c6a769-e676-4062-b433-fc4e0b7cc343.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/535c8a9b-5ec2-43e3-a53f-f0785136c1dd.png"
            ],
            "coords": [
              12,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7431938d-4d0c-46ed-a11f-41d804c90000.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/28fc7fcd-8155-4fba-b09f-e10adaafc081.png"
            ],
            "coords": [
              16,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5b26eff5-b83f-4940-a08d-2f74b85831e0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1e36bc05-fdbe-46c4-b3aa-8bc8c1054be5.png"
            ],
            "coords": [
              14,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8aa261f1-ac5b-405c-b5e6-9e87e3047cc8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3cf34b23-38f9-4b84-9344-c92940076ced.png"
            ],
            "coords": [
              16,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a02f7163-2edc-4583-853b-025dd7d3e47b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/076a9bff-f144-4d16-b39b-6d8c88d9d925.png"
            ],
            "coords": [
              1,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9acc706c-054c-4144-8e48-be3c43a64173.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/015f3464-e1d5-4e35-a55a-18e544706ab0.png"
            ],
            "coords": [
              1,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/906034fb-6103-4b4a-8998-1757069d7910.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2548db81-eeea-4b41-9b04-9fa2f5dcff91.png"
            ],
            "coords": [
              1,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cceeb318-7d30-4d8a-9672-6e8c1e3c5df7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4adc61e1-8cbf-4b56-be60-69631bf56fa8.png"
            ],
            "coords": [
              11,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b1dffba1-f8f5-48e0-8546-f82dc089c662.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/945ba84a-c69a-4f75-a9d6-5b66850ad4a7.png"
            ],
            "coords": [
              17,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ce1e0871-2141-4def-9a4a-ffaf6a64e53f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/243ad6ea-bc83-4923-9a09-39e483276ebe.png"
            ],
            "coords": [
              14,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4e294f40-1d35-4bdb-bd07-12c49dfab695.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/02e9bfdb-55f6-42f2-a69d-2ab630596e53.png"
            ],
            "coords": [
              15,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a9391158-4842-4ecf-903e-782d9116af9f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/97bccaf7-33de-4a6b-9d14-48ffce9e47a8.png"
            ],
            "coords": [
              16,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f00590a8-0327-498d-8897-aa5056e4547e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ea7cb5f9-0a70-486f-a680-d3b128b4e8d1.png"
            ],
            "coords": [
              2,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b4d206f5-d7b2-46de-80d1-7a40ce929280.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8e1cd465-8e7d-4aa7-a940-09ebb543e845.png"
            ],
            "coords": [
              13,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ded2df40-293c-4fc7-87f4-8423e0143b5a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c8f6699c-f41f-43fc-8ae7-0e51679e902e.png"
            ],
            "coords": [
              5,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/630d4e6d-922b-43e1-b3ad-ab0480a698d8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a3260717-c6ce-4611-9140-4f2a8466b396.png"
            ],
            "coords": [
              1,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/56657fe1-20df-4ccc-bdcc-c1505c960344.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/21fb0d60-1a38-475a-991f-83ef90573977.png"
            ],
            "coords": [
              2,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/94e6e45a-eab5-423c-85be-c3b442a03661.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1d2ea492-b2a8-4ea8-9304-7d4dff6c3834.png"
            ],
            "coords": [
              16,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/90598cd0-c2bb-4b4a-a599-b2728be61fd9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/daff6202-f1bb-496a-a4db-cb7da4088ce9.png"
            ],
            "coords": [
              15,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bfed75ea-26e6-409d-b381-75d20cb7cb50.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/731d0655-dc4b-4c83-8ab5-89727875d86e.png"
            ],
            "coords": [
              16,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/205ed42f-f0af-4509-9deb-740ed880958a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bac7cc51-7323-4409-a794-f76936463404.png"
            ],
            "coords": [
              2,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/81222cbb-ab45-4723-8f0c-66586b973850.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a1542f08-9e98-4ebe-bd8c-6660816bb19d.png"
            ],
            "coords": [
              13,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d84080fb-6123-4900-8e3f-286d7f42bf3a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/22484592-5f26-4443-95fe-5ea99377b953.png"
            ],
            "coords": [
              17,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e74545ae-e94c-4e31-86e7-296f3f1e4d4a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7df889a1-57d4-4550-baab-694b6319e604.png"
            ],
            "coords": [
              3,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b7c85ec3-87fb-4485-a3af-41330939a75c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8738a738-01f4-4046-9e6e-d0092854d709.png"
            ],
            "coords": [
              10,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/50e05433-a519-4299-9199-4713110b1ebe.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/161c23fd-9fd5-4b45-b6e3-cede8f0fc690.png"
            ],
            "coords": [
              17,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1c44df19-e049-43bc-8e14-494d11d9ffc9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9861bbc8-9763-4781-a279-b13fef3c7e69.png"
            ],
            "coords": [
              14,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c65758cc-3701-4b1f-9d91-583a06a7a03f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f10f72c0-e988-4027-a44f-2106df6bf776.png"
            ],
            "coords": [
              14,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3af49f5f-bbc9-439a-9104-64b39c67001c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0a1e102d-57bb-4fa0-8aa3-8f3c68179ef1.png"
            ],
            "coords": [
              1,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8fac077a-12cf-4bf3-8725-b18d1ff64cb0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d897700c-577c-4743-9fd3-ee7b03c40732.png"
            ],
            "coords": [
              9,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9ddb6a0f-ee9d-4f7d-8981-783cdbe149aa.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/60e98a3c-d0ae-41b2-9ad8-7669e86c1cce.png"
            ],
            "coords": [
              12,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/72dc112f-2f74-4bca-aab7-7c62085b1243.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f4ab034e-7843-4c62-94b7-656e7adda0cf.png"
            ],
            "coords": [
              4,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3e43beb5-b06d-4d21-81b0-d3a839fb8d56.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/308a6eda-cd0d-4c55-a054-90e20a102697.png"
            ],
            "coords": [
              17,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cc41b998-85fa-48a0-9efb-13fe06d6c433.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ba4ae2db-39e2-4918-944b-d7eebda4a64b.png"
            ],
            "coords": [
              16,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ca00aa73-eaae-44ac-873c-d35005b57ef8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5af01e1f-2e48-4ff1-aed6-d9f5298b6b9f.png"
            ],
            "coords": [
              3,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8ffd167e-6eba-4544-b357-473ec9a9ce5e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0a490218-7f95-4ede-b398-c6b3021e12c1.png"
            ],
            "coords": [
              11,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/159c0de7-c13b-44df-9ca7-66ffbfce11d6.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e52c8658-7d87-4aab-9979-7fbcb438f32f.png"
            ],
            "coords": [
              9,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/23e81b99-3cf6-47b0-97a8-f40c481db712.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/33602ca3-b63d-445f-bde6-6229171ab25a.png"
            ],
            "coords": [
              10,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c581a9ed-ea56-4a7c-a647-ec75f2838b55.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0780efe-8b19-4109-855f-eea48b92e50e.png"
            ],
            "coords": [
              16,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/07283708-600c-4fcc-8e70-be5cd8a37e63.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/766d7c2c-29ef-4ff3-9f52-f2655fd3c3d5.png"
            ],
            "coords": [
              14,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/df70f898-81ab-4a16-b66b-cf7d8cf1fc6c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ef6ee080-a0f6-4abd-a87a-0467234b0029.png"
            ],
            "coords": [
              2,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7c217549-6c11-444b-91e1-be8569bd2082.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c33d4fb0-d7b9-45be-bb93-1b1083f48166.png"
            ],
            "coords": [
              4,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2f34b79e-0ff1-4505-9ef3-de04279385b1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5bada4dd-4912-407d-9fcb-a3ed7b77ad27.png"
            ],
            "coords": [
              16,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b9275242-5a29-474e-a2c9-0501208bcb0d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bfbea7d9-e980-4433-90fe-a5170751053a.png"
            ],
            "coords": [
              1,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ae857943-49ab-4c4e-be75-0d036fc489f2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0f4b393-e9ef-4183-881f-448c4bbd5fd2.png"
            ],
            "coords": [
              16,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d71598f6-3af5-4486-ba7d-833f749f6be7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/accd9aa1-59ed-46d8-a266-fb7c95e0a2ed.png"
            ],
            "coords": [
              2,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/daae3686-4242-4eaf-9fdb-1979114157a9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/49f56d56-aa0a-4004-8d67-f4c04d20e264.png"
            ],
            "coords": [
              5,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ea36d33c-65eb-4864-aded-dfa743f3a612.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/43b2dc98-c783-43c7-aeaf-2b7ef9dcce98.png"
            ],
            "coords": [
              10,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d02148d6-cf93-40e9-ba92-95ca6212499a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dfd4fb6f-a79e-468d-8e95-a48d19dec553.png"
            ],
            "coords": [
              6,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6726cd43-b05a-45a2-aa45-81416ac29a2d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/63756b94-0ace-4dee-8d87-85644669c4d7.png"
            ],
            "coords": [
              3,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/24cdd367-93bd-443d-b542-6deb01260686.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/25d5a2a8-fc61-40de-9cec-e2f86bbf431e.png"
            ],
            "coords": [
              6,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eeba5740-fa0b-4171-b872-2dd13a0ec45f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a8f8084f-0a58-42d2-877e-e6f0269f6242.png"
            ],
            "coords": [
              4,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8b7f7ed5-4dd7-4bb3-b63f-8156abc48cfc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2fe0e7d4-0f70-4613-8140-c59d95c73303.png"
            ],
            "coords": [
              2,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d7ddf970-3cd4-40f4-a7dc-b40f917c6152.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0d82ad27-13e8-4012-82c8-b2028baa632a.png"
            ],
            "coords": [
              6,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/21991d5c-947a-4925-b8ce-23182e3620c7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f3d6e26c-5d61-4db4-979c-e8783a463d54.png"
            ],
            "coords": [
              17,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/511a5126-eab6-4104-a9a7-66b0f96987bc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6a25363e-1b00-40d5-b311-c1459143a7e7.png"
            ],
            "coords": [
              15,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fbfe461c-b685-4c6f-b486-8f41ea1650f8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dfb47d9d-5593-4f7e-a01c-f59a36889bd2.png"
            ],
            "coords": [
              7,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f114181d-c221-4304-a4fb-4a3b4fe69edd.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2f8f4c31-2ca4-40f7-848d-1bd247d6b3ad.png"
            ],
            "coords": [
              1,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e79224d0-3235-4e69-8182-97bec1323539.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b981b6c3-560c-465c-af14-39956c05ed36.png"
            ],
            "coords": [
              5,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5dbb4e37-4386-42b0-8fe4-158a77b57439.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/64a4307f-b4b6-47a5-806f-24d8dc03d81a.png"
            ],
            "coords": [
              9,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/64cb674a-de64-4589-a29a-b212df204d0a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0f639f8f-ef9e-4c39-801a-5ece0746b0a6.png"
            ],
            "coords": [
              6,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f4e0efac-846c-47bb-8569-c4b138ab7590.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c357bfd8-d253-48c4-b1e6-876b6a690ed7.png"
            ],
            "coords": [
              9,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/119fe573-1df2-42b7-8237-f9a97a960911.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cefd2bfc-9c7b-45fb-877b-ba07e8572cf6.png"
            ],
            "coords": [
              10,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/22206fb5-0735-4261-96a5-b4ba9e2f223f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7beaac61-c4fc-49e2-87f5-42dc1bb3c99a.png"
            ],
            "coords": [
              5,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f67ab9ed-2ab1-4eb0-973c-97790773665e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/193fe652-1579-425b-8400-c856624a1bd6.png"
            ],
            "coords": [
              4,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/338de70e-cb4e-4555-aad7-f5b873a71cb4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5f5e50a8-a5db-40a3-93d0-52100ca45fa7.png"
            ],
            "coords": [
              11,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/149f14c7-23e1-45eb-aeea-be4c568e4dbf.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/67fba372-3cfb-444f-8076-799206d211f5.png"
            ],
            "coords": [
              8,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/72787e8e-d341-4a49-8da8-be3f4f5a2765.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/67922da5-cbdd-47d9-8538-92fd3c442d9f.png"
            ],
            "coords": [
              8,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c1fd6ed3-66fa-436f-9d80-88841b703d28.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/98e78978-7bf3-4c61-9e32-4159122178fc.png"
            ],
            "coords": [
              16,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0749f59d-a1e6-45c9-81b0-4c52aeedc80a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/665e0d03-291c-464d-b82f-805aae7634a5.png"
            ],
            "coords": [
              13,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6e6d0f9b-1f7f-48c6-9274-e26d9b9b665f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e11e78de-0efe-4622-b8a9-4ea760aa8ba4.png"
            ],
            "coords": [
              11,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f20fea01-d01f-4171-bd0a-032302a90a5e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/41233f5e-7e8e-4046-9a69-0e0689a1ab56.png"
            ],
            "coords": [
              16,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e1881802-2f50-4c92-a7b1-e34c725e008a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e3b8fb2b-e2bb-4282-92df-4de68e660638.png"
            ],
            "coords": [
              9,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dd079cde-a725-401e-9936-4a234d7f72af.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/67523077-8957-4f7f-9f1b-c32057572f24.png"
            ],
            "coords": [
              11,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/86bd9dc7-f7ec-4509-9217-e116094989d0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4adf86c8-9383-4747-bb4b-aa20b642d105.png"
            ],
            "coords": [
              13,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2b87f5b5-775a-4d9a-973b-4852e805a909.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/892a0439-4941-403b-b720-904a4478ca6c.png"
            ],
            "coords": [
              2,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/71cf5cbc-8917-40bd-81cc-9ad4ebc7aa35.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a56222f2-7c01-4109-9415-5f6c235061c4.png"
            ],
            "coords": [
              9,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/195e2828-7995-4f00-a5dc-bf30a5b849cb.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/45e693cc-0024-4640-ab20-27291a101a6d.png"
            ],
            "coords": [
              2,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3940f0c1-3fb9-4083-b7c3-9f17a69cf90f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/392d1e6e-afce-4077-858e-2f95e087ee90.png"
            ],
            "coords": [
              3,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/77cc6453-de9b-4f66-bd3f-d0eaf3ebfc47.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e031708b-e894-4d8d-8e48-b6ca69010b6c.png"
            ],
            "coords": [
              15,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d7984fb6-78ec-4fa6-b1ed-eeaa6ccf51a1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fbb9a4cb-8261-426c-80c2-2598c886351b.png"
            ],
            "coords": [
              3,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/247e1080-2a1e-44ee-8eac-7261f24411ac.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fe687b6c-b206-4a2f-a4e1-f142a9f640c0.png"
            ],
            "coords": [
              6,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fdcdaf0a-7a33-4df6-8a83-8836addef570.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cae58715-d6b1-428a-ad5a-420a2a7ce26c.png"
            ],
            "coords": [
              6,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fb54aba5-5868-4b00-bcb3-5ba33d0133b1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e3b6942d-2e9d-4920-82a1-b00a25214cdd.png"
            ],
            "coords": [
              13,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c9f1e051-270f-48be-8352-629ed930d3fd.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f12484a4-8a68-4803-9e89-d0578ad73256.png"
            ],
            "coords": [
              3,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/292e507f-0b1d-49e5-8698-7a26735ee946.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/160adc95-1602-4071-9b6b-be41144845c1.png"
            ],
            "coords": [
              9,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b62c0b3f-15e1-44f1-ba08-de85312596d7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e7f537bf-08a8-4bfd-a21d-c7ac3156bd7f.png"
            ],
            "coords": [
              12,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1d4daeac-dc97-41e2-8792-8fa9db68dca2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b9aedf91-de16-4013-aede-e2803357ebc7.png"
            ],
            "coords": [
              1,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/609f9473-0a92-4f0e-9285-e4d0928c4913.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/761ee670-27b6-4bd4-a6e8-bdde8f55cb17.png"
            ],
            "coords": [
              15,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e2a65f94-b3c1-4568-8eab-31a408320daf.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b993d46a-0aca-4082-8453-df9f2a129e35.png"
            ],
            "coords": [
              6,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/712b1e0c-f800-4fe6-9674-d0c4d78b88c8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/13a1b2a0-6bbb-4619-88b5-9d783f26ee27.png"
            ],
            "coords": [
              14,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ec093145-474f-4639-895c-e2125b77f534.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/70623c37-72fb-4a26-abd1-85dd2e1d0c81.png"
            ],
            "coords": [
              16,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c2d94411-831a-4308-bf72-4c8b34678a6b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/120a40fd-e7ef-42ff-abfe-4a108237ea38.png"
            ],
            "coords": [
              16,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1104c888-e6b9-4acb-9eb9-b36c45daf8a9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/637c87fe-3de7-4b06-9b62-fee1d60aa156.png"
            ],
            "coords": [
              4,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0de7f5b4-2933-4ac7-9382-0c03fed2f298.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d59c6c00-fc03-4b13-b521-6779c3c99c0e.png"
            ],
            "coords": [
              17,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/10741f84-966b-4d90-87bc-668c0f2939c9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4aadbd03-7d39-4222-a1fd-0129ffcfdf19.png"
            ],
            "coords": [
              8,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/913adeac-bbab-409a-8350-668d66903203.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/00d43307-f83b-407c-8891-f06d1fb6ba83.png"
            ],
            "coords": [
              3,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7a4681d4-1474-4a15-914c-bee6bd326cec.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/321e2200-a6a3-42f3-9252-2637c5ca1c3b.png"
            ],
            "coords": [
              2,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d320b057-be70-40f0-9e50-2e94d9930af2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ea525853-4d43-496a-a27b-23248a48b24f.png"
            ],
            "coords": [
              3,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a6173c14-b032-44be-a608-25b3bab96960.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/df5e8d35-58af-4b40-b443-278578f56889.png"
            ],
            "coords": [
              13,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f9df3da9-dc4d-4887-b91f-87ed222c732b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4bdec031-9408-41af-a338-a3b9d4dbd68e.png"
            ],
            "coords": [
              6,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/27e74ef5-79a7-4198-b1d2-0e0e5eadcfd3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b5b71485-dfb6-4dad-a8bf-7e0c59952254.png"
            ],
            "coords": [
              7,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/69fdbb4c-b886-435b-af87-2a2d061bafea.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5c497a62-694f-41e2-8806-c68142551b1c.png"
            ],
            "coords": [
              6,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9b310c24-66cb-4113-ac81-2d4597aa6f86.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ab9a73fa-1fd0-4aeb-8000-4f0602a97bb9.png"
            ],
            "coords": [
              4,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/533d8a28-efb1-4618-9654-a4e0ed79a857.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0484689-27df-4b8b-8dbc-acc4722186d6.png"
            ],
            "coords": [
              3,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f4b38162-995d-4773-87a7-f432c662836a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6221da08-a72f-4728-998d-74b4eff32530.png"
            ],
            "coords": [
              10,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fc98697f-54c6-4456-a24f-dc0e23b6038d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8aa56656-03cf-415b-87c7-c53f1f5b4256.png"
            ],
            "coords": [
              8,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/933aabfb-d045-43f3-9b97-9a2ad5fbf4c0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5e8bdf41-5a0c-417d-8ccd-76f8f558b0a1.png"
            ],
            "coords": [
              12,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/767694ce-c8b2-492d-95e1-e7ac94007aa0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9eaaa2df-8b65-4c99-9072-c1406a013c4c.png"
            ],
            "coords": [
              13,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c24f9819-16ec-4d72-b98d-40da6bd8e427.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/412be611-9e7f-4151-a1c1-ec3e51ec4c94.png"
            ],
            "coords": [
              10,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/713e7682-689d-4121-a3d9-dfc458768da4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0134d801-b3ac-4d30-b82d-48eb42e3f5a5.png"
            ],
            "coords": [
              11,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5d7820e9-4a4d-4f02-9f28-2969f7a6c139.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/de260b4a-6ea7-46a7-9857-00945fe02814.png"
            ],
            "coords": [
              16,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2ecf81cf-d16c-47a0-8138-ce4792f3a9b0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5ce44095-9ce9-4909-b8d1-6933bf68e002.png"
            ],
            "coords": [
              3,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/33628e26-71a5-4872-9a00-54a84ef2ae7c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e250fa61-e84b-4fcc-85d6-187185582716.png"
            ],
            "coords": [
              4,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/47945dcf-c2ac-4243-9aa8-252a8ca1bcd9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/224a1c1f-696a-4c79-b146-b3a1c5413bc4.png"
            ],
            "coords": [
              13,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0f8cee02-84dc-4422-9efa-aa1ed530097c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b330daa7-8d1a-4d69-90ed-1bc2624e5e95.png"
            ],
            "coords": [
              9,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ba3f3f0d-7df7-4dad-bfd5-4ec0f0b78e1d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dcd7c4c9-c58e-4a9d-ad74-bfe64872ab07.png"
            ],
            "coords": [
              10,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e8e231d6-72b8-463f-8b3a-021e0d16a50a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/911678ca-cc65-454b-a08f-61988d9c6262.png"
            ],
            "coords": [
              6,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b97c9f84-9009-4825-909c-62f2bea339ea.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9423e292-0377-4dc3-9c3c-afe9f6099592.png"
            ],
            "coords": [
              13,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/63778226-9953-442d-82c5-6442425b6e35.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0c247df-9b28-4ffb-8af7-ed63b23eee80.png"
            ],
            "coords": [
              4,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ca1316c6-b63b-4760-9985-13af69ae7d55.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cc2f7dbf-a082-40cb-98ab-fb7d8ae41fdc.png"
            ],
            "coords": [
              2,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/37fef883-bf16-4731-bacb-5b9327f30867.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f8dda3e7-db03-405f-88e8-4c2937ac0a30.png"
            ],
            "coords": [
              4,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5daadf63-2b3d-42d7-afeb-84fe8c566f8a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c61690c0-ce43-47be-8146-33fc8ea8f19e.png"
            ],
            "coords": [
              4,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eae5341d-fd28-479f-92a5-b014e978e24b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/95907091-4c89-4b9d-a69c-1934c19e606a.png"
            ],
            "coords": [
              5,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e46a7b84-bcf0-4b91-aa8a-fc4706aa5413.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e335744d-04f3-4ce4-bd18-9b0c17818e01.png"
            ],
            "coords": [
              16,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0216912-1377-4004-bd73-751945dc1d96.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c2b6b03e-e0af-45a5-ac15-44044acdfadd.png"
            ],
            "coords": [
              12,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0b00e867-23ec-4964-b6ed-0a3b40c501a0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/44c81427-5621-4184-b9ed-dc792e4ec119.png"
            ],
            "coords": [
              7,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9cd88d73-2feb-4d5f-a929-c4808528d13e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1841e5cd-e430-429a-9589-5cc63569f8d9.png"
            ],
            "coords": [
              16,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/147613c7-02df-46fd-af94-d7fb2285359c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/aea5df3c-59cb-4b63-92d4-cf01de6c8fb5.png"
            ],
            "coords": [
              15,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1fa9a9b7-7ae4-4656-ad87-c092e42c7d77.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7a66b858-2ad2-4492-bc56-974d89984b24.png"
            ],
            "coords": [
              10,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/374607d0-280b-4d2f-a108-12ac26897cf3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/be02e397-c4e4-4ac0-b1b3-014482e025e1.png"
            ],
            "coords": [
              10,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/751ab6a4-f560-43bf-9d0f-0a7acf740c4e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7d775a9d-cf2e-4da3-bda0-d79205fade64.png"
            ],
            "coords": [
              11,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7f8d48d3-665d-4a0d-ac31-a9c61797a5d5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4f7a1586-c18c-4738-a151-01529c01fdf0.png"
            ],
            "coords": [
              8,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f8c1c45c-46f7-4b05-a9a4-3d492c3d142b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ea956839-9e42-4fa6-91a2-0aeab5f6a2bd.png"
            ],
            "coords": [
              17,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4895b082-4086-4eb4-8604-bd551a434b9f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5bb78435-8f12-45ae-9837-8215568f7794.png"
            ],
            "coords": [
              8,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4690f4ec-66f5-438e-b327-1270089666c2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2b4d77a6-3a4b-4bdd-b7cc-03af6cdc01ef.png"
            ],
            "coords": [
              9,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4c6610be-aa7d-490e-86d8-51717a64867c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cd8e7671-2be9-4ee5-98a8-0a76b590f5d5.png"
            ],
            "coords": [
              11,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0402060b-97e6-412a-8a23-35ef23e42d99.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8158d673-0d34-4952-b198-355483aa1ea9.png"
            ],
            "coords": [
              1,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/96ddc8fe-8700-4691-a413-2a784ab1b1ea.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1bf6b35e-e725-4ef0-9f29-fcfdf51e8686.png"
            ],
            "coords": [
              17,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b9ff441f-e530-4629-80df-2433dd65723c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0b5325e-f3be-4f09-a2d1-102a32f12a61.png"
            ],
            "coords": [
              11,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9ca88206-2522-4da3-ad83-7dc107caeedb.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ca0cc434-65af-4232-8798-763a74dcbc94.png"
            ],
            "coords": [
              14,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ceba91cb-fa19-42d8-90eb-7e21eb07a2dd.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/378d7edc-32f6-4aa4-99d9-9223e74f01ba.png"
            ],
            "coords": [
              12,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f28b4763-9cef-480f-ab32-fb07680feca8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/acf09ad0-d30b-4eaf-9881-67b0f5ea732b.png"
            ],
            "coords": [
              2,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/28c0ad02-9a8f-4e47-87e9-2052f7258a91.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/79191ff4-168d-4067-a139-6154f76c600c.png"
            ],
            "coords": [
              11,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f323d7d4-e03b-4f3a-8a08-38be8a837d8b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dcd2d06d-b3d2-4122-ba4f-fc4ded4748f5.png"
            ],
            "coords": [
              6,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b28ebd4f-41fa-4760-905e-0d15fb90b76e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e9679de1-4398-42c9-a6bc-5239647b5278.png"
            ],
            "coords": [
              7,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/31afe7e2-bc89-4746-aa13-892bf6bdf1c4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e55b9fe1-f1b7-4c68-8431-9bf9cee380b5.png"
            ],
            "coords": [
              5,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2839a5d3-2d54-4d70-bccb-d9ca5d8b16e8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/608ad96c-68c0-4af2-aa75-947873e52879.png"
            ],
            "coords": [
              3,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/38151543-684c-4985-bdca-71d842410e71.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/56133610-a1f0-4c7f-aab4-2877f167ecfa.png"
            ],
            "coords": [
              8,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/437e135c-9533-4349-8c09-c28389add8e3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/77394c90-5d5d-4f6a-ba12-5450231e3e5f.png"
            ],
            "coords": [
              10,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ec06e607-ba17-4584-8bef-ddfce328de3e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e34bd698-4054-4488-b31b-8acea762cb50.png"
            ],
            "coords": [
              7,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/07667943-9a4f-4205-a95f-61801a11b65f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d37d3334-0f7a-4c7a-8a85-88e4f5d31ba0.png"
            ],
            "coords": [
              13,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b092ddda-9889-4ea2-acd8-22fcbff1c19f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/99950d5f-7d5d-4c1d-a847-0646c901b3ad.png"
            ],
            "coords": [
              17,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ec0f5a67-7c99-4ad1-af39-6746c4c4715d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/88495d1e-e08b-4b21-b7ea-60e5f487c799.png"
            ],
            "coords": [
              8,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/682f9d98-555b-4a01-9d75-6df387b114f2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eff0be53-709f-4440-8544-25e96071aed0.png"
            ],
            "coords": [
              14,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/df849468-6188-4aff-a467-704b0aa5d9b1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d51e169c-ad39-40cb-bf6d-8cd3d1e4f7f8.png"
            ],
            "coords": [
              10,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3340637a-6650-4da0-9e42-6c982902fbf0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1caa27b7-18ce-426d-b988-089e68231671.png"
            ],
            "coords": [
              11,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/974d59ef-05fb-47d2-acec-e3f34237e6b5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e097a7f7-ffbc-4a0d-8700-8d9c8ba5ec9a.png"
            ],
            "coords": [
              12,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8165cfcb-1dc4-4d3c-ba05-73650524f6bb.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/efcddd61-8657-4dd1-8a3b-76fd83d5d0bb.png"
            ],
            "coords": [
              6,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6a5aaf32-cc18-4ce8-8037-b2eaf6807e95.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bb74a700-27d8-4273-b7a2-d02c3267ef90.png"
            ],
            "coords": [
              2,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/829a752c-ab86-4ec8-813c-795f97b3d887.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/63f30d90-e682-48b9-9a14-89b3c66f8223.png"
            ],
            "coords": [
              9,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/566d21d7-fd98-4806-a1e3-bb9ea0924b8d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/020e9757-5a27-41c2-ab7e-082946b537b0.png"
            ],
            "coords": [
              10,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/79e1b116-f7fc-47d5-89a0-16b80dd36f10.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/91bab283-14c1-470d-9d35-b3dacfcb1767.png"
            ],
            "coords": [
              16,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/02fca363-fc1b-48c1-8556-5d91baaf22d5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fb2399bc-1fb2-4577-b48a-bef7ace1e7c6.png"
            ],
            "coords": [
              13,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/52c57ac4-d9eb-4ad2-a6f1-f65a6de70362.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9053fc80-3be3-47ed-8351-2e7f61bae387.png"
            ],
            "coords": [
              15,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b1af85b2-4f91-472b-848c-337627816b9d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2b825913-7622-4313-9f33-54de6db5fe39.png"
            ],
            "coords": [
              14,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/088ad2fb-a295-44c9-9014-5117964c528b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/73ee9076-4cdc-4609-bf79-0c558c46b688.png"
            ],
            "coords": [
              4,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/abf9c733-edc7-494e-87c0-2a944230d14c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d6ad66bc-f8e6-4844-b440-dd3ef64cb236.png"
            ],
            "coords": [
              17,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bbabc356-e8e1-44d9-b940-e543c4ea3d24.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f7d3238f-04b9-4f78-b8b6-eed062dd0c2b.png"
            ],
            "coords": [
              7,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d3813593-d4b6-426d-a4c5-82647ae0d1d2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3a0665fb-fb77-4e8b-83af-02b54abe4e44.png"
            ],
            "coords": [
              16,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/caabb1f4-6970-4cd1-847f-3eb379b729aa.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bf2bad6e-ac7f-4077-84b8-3a29944e49c8.png"
            ],
            "coords": [
              5,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9a17b106-8b2a-4dda-ae33-8015fb96262d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c985e01a-084f-4a9d-b33b-1f376190197d.png"
            ],
            "coords": [
              5,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8449c9c1-c60e-40a8-bafd-c548b3832934.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/18693b84-6ce0-4691-bc60-d39bad456a27.png"
            ],
            "coords": [
              13,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4edd060a-a2a8-4437-8dfb-403cec6cab17.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7a733ba3-aa82-4b67-a043-748992e4f330.png"
            ],
            "coords": [
              12,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7fdcbc8e-a1b4-4a02-815e-21e72f222294.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/40eb159d-b91e-49fd-9712-f46dd7b00be0.png"
            ],
            "coords": [
              12,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/54cac692-2863-4163-b815-a1465007e429.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/937811ad-1046-4f1d-90ce-3cd67d32c8bf.png"
            ],
            "coords": [
              12,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/af11d879-0489-417a-a550-5daedeca3385.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d8113795-8562-478f-8291-1e01655d5818.png"
            ],
            "coords": [
              8,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/330bb97d-0886-44a0-9e69-56a936c2132b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/49dad831-4423-482f-bf9c-b405add134ce.png"
            ],
            "coords": [
              8,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5d5a7a63-b7a5-455e-9408-2c0186cbf9d8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8539ddc1-90cd-4e36-8679-7b43a8c3327a.png"
            ],
            "coords": [
              6,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c6fe6a4d-95cb-46a4-9369-c3137d666934.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1a326a7d-9ec2-4bbf-ba5a-f3bf07ab5b06.png"
            ],
            "coords": [
              5,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/af2921e7-050a-4a4d-80fd-b75f1e425c24.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/de001ffc-3d87-4b85-92ee-1f369024cb88.png"
            ],
            "coords": [
              6,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4f59e115-6ba0-430a-a4c2-4e88799f65db.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1d056b0c-0592-4a63-aed9-9bbe6f12e3b3.png"
            ],
            "coords": [
              11,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/53b7dbba-a9a0-4824-badc-057e20244132.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/996f648a-3190-4f26-b305-18f0fae60ae5.png"
            ],
            "coords": [
              10,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b89c38fb-c9c6-4669-b204-df8387d619ba.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e6eb426c-c8c2-4fbf-89ef-0104103d4079.png"
            ],
            "coords": [
              15,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c5a295af-915b-4038-93f6-a2befcdd0df1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5cb9d14f-dd07-46e9-a9b4-c6ea52014d6f.png"
            ],
            "coords": [
              3,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ac68d123-8fe0-4a57-af91-f50f49a9edc6.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3e9fd3a2-8d4b-4dd9-b05e-cfcb228845bc.png"
            ],
            "coords": [
              11,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7ab616b4-3c3a-4601-a86e-66637b9f3cca.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1656d08e-4933-41ab-808a-a7138d9803cb.png"
            ],
            "coords": [
              2,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f7e1eb65-98ab-420a-99d1-37adbe837612.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/81a1fbe4-f413-4a00-a953-1b027caff129.png"
            ],
            "coords": [
              12,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/915b4096-aae9-4a34-9156-16fd44b83a1a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ede240b1-c160-46e7-b6d3-dd79be0f4e56.png"
            ],
            "coords": [
              17,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/82981b2d-a8ee-49a8-be14-dcdf5cae49a1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/774b08f5-c4fe-4e2d-aa57-277b9c17c0f6.png"
            ],
            "coords": [
              8,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/44a38783-8134-4265-8c2e-b67ae5de20e6.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a3fbe602-c69d-40bf-9f79-0c83cd596aae.png"
            ],
            "coords": [
              17,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f9d0c4c3-cb17-4cca-93da-f1a22a7e5fa4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/32e825da-405c-45a5-99c8-d81470794136.png"
            ],
            "coords": [
              2,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6e7f4115-402c-476d-9d3b-16fd5db73ed8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b60dc7d5-8f1f-4e68-9ceb-fdcd390dbdd8.png"
            ],
            "coords": [
              4,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3c4a5fc0-a5b9-4d77-be71-789a962b2516.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/275cdf1b-1d4c-43a2-9497-bfed495adfaa.png"
            ],
            "coords": [
              3,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/49e64ee3-293f-48a5-a292-3bea8a342773.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3d20481e-e65d-44e0-bbea-29de9c2a649d.png"
            ],
            "coords": [
              8,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c7c985fd-a634-4ded-9d4e-020832433ac9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/29f3966c-4584-4ffa-9923-573937b61dd8.png"
            ],
            "coords": [
              6,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a7b77c29-4d74-4f36-92ef-9d7f7eb09aa9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/14f93d1e-87f9-4cc4-92e8-decdfe08c8ef.png"
            ],
            "coords": [
              5,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/042d3246-11cb-4da7-ae3e-1ebe73abea84.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2aa16f6b-b918-43b4-a471-732b9f496c5c.png"
            ],
            "coords": [
              16,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9741a363-6281-4d4e-9fd4-d27370fb24f7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6838aa50-5ecf-465b-bbfa-0657b51a6574.png"
            ],
            "coords": [
              10,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/83e0ee5b-5d20-4e80-aab0-fe037e6c977d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e70737e4-4247-471a-b641-21279db68767.png"
            ],
            "coords": [
              4,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/27a40283-5090-420b-8d9c-d8a798f6eda7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bce8de3a-1d2a-4764-af65-4fb589a232ad.png"
            ],
            "coords": [
              3,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bb656f89-9f11-4f47-b523-52734a774d4b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/63022730-be01-4c54-8d35-0cf571e98c2a.png"
            ],
            "coords": [
              14,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/08467a85-d330-4794-bef9-1decd9ba48c9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9a86d103-0687-49dd-9d42-7f8a86957cc0.png"
            ],
            "coords": [
              11,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/34eebbd8-97a3-4be8-898b-8f85105a5bf4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/761cf7e8-105d-4046-865b-eeab26adbe63.png"
            ],
            "coords": [
              2,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1cda0d0a-0a5e-4092-a85e-f2a7f8479c29.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/77af059b-62e7-4b70-8595-361ec7f74b6a.png"
            ],
            "coords": [
              11,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c060b61c-5899-4cc6-8be1-8658c24bade2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6db185d2-bf83-4536-beab-3b894d0d0e83.png"
            ],
            "coords": [
              9,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8151a1c8-3a0f-4bd3-be41-84d72fd08cf9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c6ff1f6e-6d4c-4f6b-8783-74cf1db81fa8.png"
            ],
            "coords": [
              8,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6d743c57-0b39-4770-85f1-6e19c7f37d48.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/35153179-a23f-4798-a223-952d7de906ad.png"
            ],
            "coords": [
              2,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c12ac99d-2c9b-4d84-8119-121c434efdfd.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cf6617c1-3dea-491e-9be2-fef26e3a4776.png"
            ],
            "coords": [
              11,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0f830954-09c4-474a-8448-f36ab994e190.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d2bd7053-9ca3-4add-8554-d832e8918cdd.png"
            ],
            "coords": [
              17,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f86621dd-b257-4374-af84-77c0027f7da3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/be29c83a-531d-42c1-a4ce-6e3c3a5acad8.png"
            ],
            "coords": [
              5,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/225192f3-8590-4ae6-a385-d54bc4fc8af8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9c70f1ad-1ba9-43d8-8b24-d2035a6a86b0.png"
            ],
            "coords": [
              5,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e4e03551-21ff-417f-be13-7a5b0fdaf7f1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e5da9987-06c9-4349-b282-2f90563fe572.png"
            ],
            "coords": [
              1,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b2807b01-2757-4c4c-88dd-5e83981ed02f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0eca8e2d-107d-4b02-8f02-247290aa03dc.png"
            ],
            "coords": [
              7,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7d102955-e386-4f9d-98f1-7873ffb0ad5d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5114b769-fa62-46c4-b771-47cf043c620f.png"
            ],
            "coords": [
              10,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e629adac-58c4-41fe-bfb7-e1bdf59dd464.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/61399994-2cd0-4111-97a7-160ba279e157.png"
            ],
            "coords": [
              6,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/543f1562-0924-4835-a04e-cccf3a57eeb7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b94127d3-2ac1-4aed-bffa-7a05e128de1c.png"
            ],
            "coords": [
              11,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3ad887fe-7cf2-401f-b95b-c2e1cfcef000.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0b56d49c-9531-4e72-aae1-70e30b81d1a1.png"
            ],
            "coords": [
              3,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/38694e93-cb17-495c-97b3-716dec274688.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/694aa6f4-eeca-4986-8b35-a35e8c722d57.png"
            ],
            "coords": [
              8,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/df30111e-3859-415f-884f-07bfb0eeaf35.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3e4124d0-cc69-4bd2-bb69-5e045e67edeb.png"
            ],
            "coords": [
              5,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/db6f8891-f210-4610-bbc6-01a7dd77c535.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b1b66a10-7c81-468c-babe-337020291e08.png"
            ],
            "coords": [
              5,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/78f08c91-e767-4577-a956-999d35a47d0d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7c13a03f-fcea-4892-b6c3-5dcbc53f4d86.png"
            ],
            "coords": [
              16,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a360e0a8-3a17-43be-bd73-60fde72963c5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0893309a-5be7-49c8-a271-defa4c6534bf.png"
            ],
            "coords": [
              1,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/beda2a64-525e-4f44-b631-2dee88e9ddc9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bcd0eb39-6ac1-4988-8fdc-8e2f840cda88.png"
            ],
            "coords": [
              9,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7d4b199a-b9e6-46a8-a8f2-ac3ce3baf09a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9a33f638-3558-466e-9486-f07cb7f5b03b.png"
            ],
            "coords": [
              4,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/42f063d9-aa23-4e15-a451-a67994d65937.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fcc0ba16-daea-46e4-9b87-63b4f7f377a8.png"
            ],
            "coords": [
              7,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d467bc37-6fcf-470a-b2ff-c6cafcab43e4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2cb1cda4-a73e-44b4-8ab7-9f9c1fb5a292.png"
            ],
            "coords": [
              8,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/efe700fc-3d6f-4497-a544-26832d527b67.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1c247349-ea4f-48ff-a842-84ab6125acef.png"
            ],
            "coords": [
              14,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/02b2075a-2ef5-4e0e-8cb1-a48c0d3c9b5d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/06a7c3bf-c430-4a36-be6f-1e50d822243f.png"
            ],
            "coords": [
              17,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cc60e859-3725-4345-b685-d1e0bbf2eea7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/445b8086-5117-4bc5-8aeb-1e815a47ee95.png"
            ],
            "coords": [
              17,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c3589331-cb91-4603-8f69-d8d3ae465614.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b562e4ea-0993-45d0-9b6a-42b08693fade.png"
            ],
            "coords": [
              7,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7c11ef9d-8cb3-4d86-8f9e-f8bcca32f8a8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/54dd598e-0820-4467-b9cf-ca4793ed5e61.png"
            ],
            "coords": [
              4,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/79a7a8fc-da6b-4f1e-8927-59273fae8fa1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5da55d79-4779-4f8b-9889-235951f210a5.png"
            ],
            "coords": [
              13,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5af27457-3685-4c81-b593-6562b266d79b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/94823e8a-c79f-4f22-a954-c47cf8d9cc1b.png"
            ],
            "coords": [
              10,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1ca7a4ee-52ae-4d19-98b4-085773cecbc1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/364d06da-8846-445a-af3d-89918b1169c5.png"
            ],
            "coords": [
              4,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/59a0782f-0ec4-406d-a80d-938084044c9c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/167dc6cf-dcb2-40ca-a83c-5fa15d8745be.png"
            ],
            "coords": [
              8,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/40ce07a3-1006-4de8-94b0-b1381ec0e104.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/84c8af93-eaf0-4eea-8bb7-c91f14ac3405.png"
            ],
            "coords": [
              7,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/435043d7-66b9-41c6-9e1f-1c94e3aa96ac.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cea52523-11e4-41de-a3ad-c3c705c03382.png"
            ],
            "coords": [
              1,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/329a9743-838b-43b5-b178-c32a7eda5bf9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ce0edbfe-7288-4e50-abda-a535ee855483.png"
            ],
            "coords": [
              14,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2526f30e-82a1-447e-b186-79dd493d5d69.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2623217c-6680-40b6-87d3-1853cd092ce6.png"
            ],
            "coords": [
              9,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/81aa4a71-0cc1-49e8-ae8b-bd39d4b1037d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/12052c69-006c-48bf-a1d6-a18d076ea36a.png"
            ],
            "coords": [
              16,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ccdb12ea-4d99-432d-b2a5-d31ce4b383ef.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/27cae335-98f3-4c44-b4a0-89246c0af713.png"
            ],
            "coords": [
              8,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/44dc6498-db6b-4b3e-acd1-fb8352a9a716.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/adb0eba0-43f8-4402-88b0-2614c79d64d4.png"
            ],
            "coords": [
              9,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cb97b384-a973-44d3-8793-8694415e2748.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0f1dd583-b9a1-48f6-959c-cd56ef2bf726.png"
            ],
            "coords": [
              15,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/54493937-728e-46dc-b228-ede2f8cd5986.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0a872c3c-80c0-4268-98dc-da55eddd460d.png"
            ],
            "coords": [
              6,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e0e99012-e291-4bca-8bbb-0bf9943e2baa.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a7597a1e-faec-416b-b172-74eb7986120f.png"
            ],
            "coords": [
              9,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1f15a7a2-efc8-404d-b583-9f04cb35b530.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/397e946a-be47-4eb4-9f39-01b12eb5437d.png"
            ],
            "coords": [
              17,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bb9290af-5248-4b72-9f08-dac93d2f1b8f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/955b1fa1-41a0-455c-a92a-c2697ca44151.png"
            ],
            "coords": [
              3,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/50779d4d-e3f2-4862-8cd8-56409e68358e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b59d6ef7-742f-4ea4-a87e-9c35d257ca4d.png"
            ],
            "coords": [
              7,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a7249e44-6c07-4e82-8038-90482bbe8cec.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f05cba5a-0089-4d8d-9786-c26f59cf9fa5.png"
            ],
            "coords": [
              6,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d322247f-0f9c-496a-8aae-88527713d179.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8d4ad2c4-a56e-415e-b2c6-5bf6bc01a1cc.png"
            ],
            "coords": [
              5,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/213da65f-0979-4fed-86ec-733fb9095320.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b1083697-2156-4180-b87c-54f48b685b15.png"
            ],
            "coords": [
              10,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/680808ac-24f1-4c0c-8f10-29885912345e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2ab30e27-7c82-43f8-a89c-37e6f887ebe6.png"
            ],
            "coords": [
              7,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/18e9be98-0007-459d-853e-472f1722a6f0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c2fdc161-8991-4c86-8376-9fb5c40361a1.png"
            ],
            "coords": [
              17,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/521488b3-c6c6-40b0-b358-d405b58a203f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ecb0c45e-fdf0-4a1e-ac93-10ab0b14519b.png"
            ],
            "coords": [
              8,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7f98370e-0565-48b4-911b-0f536ea52581.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a43a2417-4f7e-41c5-b477-d49650649cab.png"
            ],
            "coords": [
              6,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6d78f78a-ef57-4f43-bbdb-a378d8ece46a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/63e65d84-00ce-4314-af82-5862c8120a85.png"
            ],
            "coords": [
              7,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d1363f15-6e84-4c93-92dc-c6f9da2f5b9a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a177486e-dac0-4175-a15d-772c7ce42385.png"
            ],
            "coords": [
              13,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e9298ebb-f8ae-4765-af23-bdabb73beaf7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/01b46b61-89bf-488f-aa5c-2f08d2e190fb.png"
            ],
            "coords": [
              9,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/62e5edca-61f0-44a5-9cce-0256639ad81d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fb82a0bd-a375-4e3d-9f4e-f18742fa51c9.png"
            ],
            "coords": [
              6,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0e455f0d-d7cf-486e-a77a-6b046ee37a8c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4731edfe-b874-40e5-a3cd-1c25079dcbbe.png"
            ],
            "coords": [
              9,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f254c4cc-f49f-407b-ae13-93ffc0f8cbde.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ef372115-6aed-4164-9f31-dc070488ad51.png"
            ],
            "coords": [
              13,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/316f0a60-61c8-44ae-bf28-1105c4db13dc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1be1ca53-3d5c-4d18-a237-d58f9da4366d.png"
            ],
            "coords": [
              8,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dc4636e7-2468-4c94-892c-3d11a4f8f20b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2f03acad-25cf-4c2b-bcaf-84b54170be16.png"
            ],
            "coords": [
              1,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3317961e-e178-42b6-93f6-c44fe1e63192.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d4193071-b61b-4641-ab48-26e8d5f6e09d.png"
            ],
            "coords": [
              2,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f0547959-b0ea-4221-88f5-ae4a109bb6cc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ba461705-1cbe-463c-b6ba-60f4a72f7aef.png"
            ],
            "coords": [
              15,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eca37074-e1f4-49ed-8611-cb596d9c72be.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5d585eba-1b25-4172-9bac-1f0f200bf864.png"
            ],
            "coords": [
              1,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/466aa522-8b4f-4364-8045-d0bf27b75274.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/976803de-c139-4e7c-9647-fc3d45d79545.png"
            ],
            "coords": [
              3,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b53fc77f-db09-4aaa-a6dc-a7e13337f5bb.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f3aa031c-6950-4bda-836c-5428e28577ad.png"
            ],
            "coords": [
              13,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/edae6103-5f55-4b5c-8686-34c7cbaaf8a6.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2a9501d7-650d-4dfe-b456-be8490a741f3.png"
            ],
            "coords": [
              9,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f21ea558-5ce9-4d4b-9c2f-c02f4ed9f629.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1724750f-52a5-4999-b49e-ed5a50f662cf.png"
            ],
            "coords": [
              6,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0609329-2b58-427f-a2e7-a67121fea201.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7a801fce-4a60-4607-8684-b352c54e1633.png"
            ],
            "coords": [
              16,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4d70902e-74ed-44f5-958f-bfa9be5b1860.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/332ba172-0cbe-4045-be66-2f55cee6034e.png"
            ],
            "coords": [
              13,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fe3d7fef-580a-4598-8752-fcf13ca60f93.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0c6c8f6e-fbb8-40f6-babe-b2e25af4b5eb.png"
            ],
            "coords": [
              12,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b21ccf12-4055-401d-be26-b4f1706b6c42.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5b964ce1-e845-491d-8f4d-61f876bb7aa4.png"
            ],
            "coords": [
              13,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/288c1b13-5d07-405e-9749-f30f2a0d9752.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2737a23b-6e56-4454-ae0f-c2af5529e9b0.png"
            ],
            "coords": [
              5,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/540017e2-1ad5-4b5d-ab91-a577231d63b2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/07031198-2af9-474c-ade6-3c1e7abca784.png"
            ],
            "coords": [
              12,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/32db1da7-bd1c-489f-bcd0-718ecda54d89.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/199621a8-8369-45bc-b462-c51bc6c1b901.png"
            ],
            "coords": [
              1,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/440a3651-1f36-4fd7-a8e1-95244677b1be.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7471aa65-9580-4d7e-bb82-c0b3a2d26008.png"
            ],
            "coords": [
              7,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/02e69504-c5bb-4a30-b0bb-52b83ed72209.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cadb3c73-fce3-4f80-bc3b-4af44da5b423.png"
            ],
            "coords": [
              15,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/081555bb-8297-4c16-b6a0-d3811257424d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4d9af220-95dc-4df5-b26c-cead11cfb9be.png"
            ],
            "coords": [
              15,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/786105c1-3303-4613-a071-71bb9a85daa7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6a30a0ce-4ec8-45ee-aa4f-f97f9831ab24.png"
            ],
            "coords": [
              8,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/36a2525c-1e47-412b-836e-db7e9f1e04fc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a0c55359-5943-43bf-a339-5bbbb15cf925.png"
            ],
            "coords": [
              11,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/89600c4a-f198-4cba-a8a3-5ebeb55432d0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3f92f3e3-3b39-483a-8dbf-396fc8a9e024.png"
            ],
            "coords": [
              3,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ce67e926-4920-485e-b56c-dce56c5dc60c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0f7669d7-5ec8-42ab-a304-b7816daaeb6e.png"
            ],
            "coords": [
              2,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b7020ac4-a1a4-496c-9af2-00340d8ea73c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/14702cf8-d3cc-44dc-9497-74e55578ab4d.png"
            ],
            "coords": [
              11,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/96046b71-ab8f-4173-93db-810cea234d74.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a95c9cce-7c7f-4bd7-addf-e77ae98ee91f.png"
            ],
            "coords": [
              15,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3f7c858d-738e-4f9e-a832-77b67c599708.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dff180b3-3abf-4be2-98ac-230fa0342ce7.png"
            ],
            "coords": [
              4,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c58e0e94-4e31-4fab-892b-1a878f1c8b04.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d05bbb2f-a942-4a8a-af3c-b01c85c15ff6.png"
            ],
            "coords": [
              5,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1fde6be7-6d7a-41fe-9f8a-59a2f937c58c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d86f7262-989e-4dc8-bad8-1c69bc16c92b.png"
            ],
            "coords": [
              5,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c7fb8126-8a06-4b30-a460-6ca0a07f2780.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8ed0d3d8-e909-41b6-a3a1-8cca24a98e14.png"
            ],
            "coords": [
              2,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4b792322-c3ce-48f3-9ca3-c06651a2e885.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0e0b2570-8702-494e-a28a-d7ca715c9cb8.png"
            ],
            "coords": [
              1,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7e1fb762-a892-428a-81cf-36ec7266602a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/77e3aaa7-d70f-44d8-945a-6566f2022102.png"
            ],
            "coords": [
              4,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/db87fc1f-0df2-42aa-b02e-13e0d4d7feb9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d37ea1f1-8466-42c5-ab5a-810fec745b90.png"
            ],
            "coords": [
              14,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/471ee72a-6645-4f65-a7e1-25e19d9f2a5c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7e78d509-5f5d-46f6-b340-9ded5172ff0f.png"
            ],
            "coords": [
              2,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/edab7672-0637-42c7-8c4e-f5c6431e8e27.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/56e99a57-7fe1-4538-be36-64d63ed36373.png"
            ],
            "coords": [
              9,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5b00c2fa-011f-4dec-9a58-9977759aa3ac.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2b025b0d-aabe-45dd-8db0-fa3f3397cfe2.png"
            ],
            "coords": [
              8,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d031619a-1dec-480f-8e4d-910dafff1a44.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e618caf4-5cbb-4666-927d-73b630e0a2fd.png"
            ],
            "coords": [
              17,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/78dcadfe-1dff-40ca-9b56-7f984f650400.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f9029196-ec5a-4ca2-ba12-a415b67c69a5.png"
            ],
            "coords": [
              13,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5c22c193-93e6-40a7-bb3e-8cc148c5af0d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c18f9423-76bd-4971-8488-900ffa5fa730.png"
            ],
            "coords": [
              6,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/376c2f8f-e29a-4b42-8f63-aa013ee4f329.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/118011f6-f984-470c-9d80-2deaabb2cbbf.png"
            ],
            "coords": [
              14,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a4b7489c-d499-49f9-8444-65ae9c17b582.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c0d1ce32-7a5b-4129-9ca5-4c3dcd6881af.png"
            ],
            "coords": [
              13,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b47ff3c2-a629-4f30-b5f1-b258e1bd1261.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/73a29e8b-e2ce-4e11-921f-b3aa09947b61.png"
            ],
            "coords": [
              15,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4ed4c21f-a349-4830-b97c-6f02d1c69738.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1dcc7ffd-fd1c-4b7d-a1c8-0470fce3a5df.png"
            ],
            "coords": [
              13,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ed2846fe-6168-47c1-9e0c-7a08ed1a2faf.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/98f765cb-6bd2-4627-afa4-b7d36c359501.png"
            ],
            "coords": [
              13,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/42a1c099-f607-4fe6-8138-205c3b4d83d1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7ade2108-5bdb-4720-b7f9-6beb274b9c71.png"
            ],
            "coords": [
              13,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d80de836-2238-4101-b411-5213f85cd4c5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/44d11576-760f-4080-bbd8-6f9597b2a6f7.png"
            ],
            "coords": [
              15,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/09465a0c-b920-4797-82d6-1bd619c6b95b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eef628b8-441b-4983-96d6-0d79d74ce207.png"
            ],
            "coords": [
              15,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/293a251d-aace-4130-b089-b655d8075a74.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3c2551eb-42c6-4731-b334-034d1135a12a.png"
            ],
            "coords": [
              14,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2f34279d-f20b-416b-8e5a-e55555527aca.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/07aa00ec-4b9f-4942-9b5c-e55faa21a9b2.png"
            ],
            "coords": [
              7,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/95d32a16-b71c-4e6d-930d-60d69f42335b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2f02e6b7-aac1-4689-a9a8-8b5b774b6cdc.png"
            ],
            "coords": [
              4,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fa662cf4-5a60-4a17-8fd8-7440b472ea18.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5afaa40c-c9db-45fe-9625-c560cb3f6357.png"
            ],
            "coords": [
              15,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ad9d1254-5a23-4cc3-bc5d-97996770d795.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bdf396af-14a6-4d13-a09e-0d68857bcceb.png"
            ],
            "coords": [
              3,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4cdc7e91-5e77-44b6-9b71-dcb69048f829.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e4d00c58-5e4a-440f-a17a-21e5d622c1c7.png"
            ],
            "coords": [
              14,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/496d582b-a81d-489f-b28b-65b4bbfbb905.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6a212ae1-9eb5-40c3-808f-85deeb96f949.png"
            ],
            "coords": [
              12,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3cee2039-0af6-44c5-b8fc-a0dda11e0e48.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f9fbc4f7-4e00-4416-b3d0-df01a1c0a232.png"
            ],
            "coords": [
              1,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/00830264-77ab-4a5d-9bf1-91f212cc2248.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0592d30e-a795-4a81-9d70-f9c16114737c.png"
            ],
            "coords": [
              14,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3c88eedb-5e26-4b90-964a-bff003f7bc7b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4d2a797f-d122-4448-8bce-52ab5ac18600.png"
            ],
            "coords": [
              16,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/17917e94-f235-4490-b7f7-fb3dd9b92a29.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3f88a3d2-b6aa-4a30-8f93-6240d971bbc6.png"
            ],
            "coords": [
              7,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/df33bcb4-43dd-4031-9ef5-d6c837ba0614.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1f0ebf84-7c88-4962-9dbc-c2562018164f.png"
            ],
            "coords": [
              8,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7302241b-3bd2-4de7-81ee-3ea7ac135e94.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fb3d2523-876f-4c2c-b84a-f034733c9545.png"
            ],
            "coords": [
              8,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1f269610-c2b5-4df7-b721-74c3b5d7afe1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/79bb3d4e-9b6c-4eb4-9077-dca6353bf414.png"
            ],
            "coords": [
              5,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/00887a7e-c01b-4d91-bb10-42c74afa178a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/45dac89d-2817-4e52-a6be-b18afe40b938.png"
            ],
            "coords": [
              11,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cb79ea6f-ac94-4008-b722-e87cf9e1cee7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/10ef53db-fc1b-469e-8372-e2b83b7bdd59.png"
            ],
            "coords": [
              12,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/50e24110-3315-4830-bb43-2f58b7dee4b7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ac7493c8-2ec8-46fa-8e33-e982a3e87e9b.png"
            ],
            "coords": [
              7,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/429bde39-e750-4b57-91e4-564c7521a166.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/69b6f31f-dab3-484f-b47f-9a03f4dc21e3.png"
            ],
            "coords": [
              5,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/623c6aea-ee84-4c48-9944-adb8c08c5596.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f1bf8b5d-b797-4a11-8f3d-8e0b35ac6260.png"
            ],
            "coords": [
              9,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e272d2fb-b6d6-4565-a1f4-275e0fdc1f32.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/39f21510-278b-4d6e-ae58-bbe5db36d4ec.png"
            ],
            "coords": [
              3,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0f70bca2-f5e7-4044-9d51-cc5032762085.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/30d84b20-de5f-454a-b51e-040c3979698c.png"
            ],
            "coords": [
              7,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cf45f849-7d55-4963-a20c-79ba2955d187.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1421a179-9788-404f-954c-5d9d0b3e1e7a.png"
            ],
            "coords": [
              1,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4278ba70-6d8d-4cdc-b1c8-501c0f4e27e9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4e7f93c2-3a70-4e1d-bcf4-c2ad2026f995.png"
            ],
            "coords": [
              4,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0e1f1d44-3fd0-4ea6-90eb-af164d680600.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6823b614-c1cb-47df-848b-cb3565e81fd9.png"
            ],
            "coords": [
              17,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dfa94c28-3c85-48b8-93d5-7457bdf34d24.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4ed9ab85-fd63-47e0-ab2f-55f92c9766b8.png"
            ],
            "coords": [
              5,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2908f44f-bbb7-4c1c-b927-f8a144148a2a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9ff25b8d-6b1a-498c-9d80-786b4d7616d9.png"
            ],
            "coords": [
              17,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8780f9f2-fac9-46f4-a50b-0329444dd312.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1494ba30-f224-4957-bcf5-775a4aee460f.png"
            ],
            "coords": [
              14,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/78dad012-8a5b-4f08-a6f4-f873c2d3a54f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f2109b1f-965c-41a4-81d8-7d96c29e2be5.png"
            ],
            "coords": [
              2,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eb0011e2-92e4-4fff-bc84-2a4da7828286.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d1f317a0-b21e-435a-a4c3-2515b57d53c5.png"
            ],
            "coords": [
              1,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9ac51b9a-0a80-492e-a0dc-deaffc4ba5d9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3a1dc24b-1257-40dc-a193-59d98f601fc4.png"
            ],
            "coords": [
              3,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/052481f5-e0aa-41e0-93f8-4956eeda3c9f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5bf80d09-9971-45b5-b80e-f8ba40c2b7af.png"
            ],
            "coords": [
              9,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/70ab3dfa-e56d-444f-9ee6-6593b66cd6cb.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2cf704fc-6e27-4a04-bb9f-959dff8cc402.png"
            ],
            "coords": [
              11,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5111abaa-9735-4528-9eaf-f624a1beb0d2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/393f8c26-3a61-4700-b878-0c9ebea29a9b.png"
            ],
            "coords": [
              3,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/592e6cda-b450-4401-9628-6b7c23472b5a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7a3b6121-cbb5-4e78-96ac-b1d81af6f8e6.png"
            ],
            "coords": [
              7,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f8c96918-c50d-40c9-abc4-a967508651dd.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8231d954-46d1-476c-815e-2ecd3c5fc9b2.png"
            ],
            "coords": [
              15,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ec0c937f-7913-41ee-9573-1f8b9097ab5c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f8542f57-317d-4101-bd51-8cb013532a35.png"
            ],
            "coords": [
              16,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c59ce1b0-de29-44c3-b68a-8ed2b5d4c15a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c85c726d-ca8d-4de4-ad7c-7df290f86cda.png"
            ],
            "coords": [
              3,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3510db43-5b4c-4387-8e6f-f9dde6b40959.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/43963583-a74f-4d7d-b1bb-a4bc96d0b3a0.png"
            ],
            "coords": [
              2,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2daa1552-d3b2-4c3f-b2b3-87b7b9788754.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c3321e05-9cff-4d4e-ac9f-4a337a4fbad7.png"
            ],
            "coords": [
              14,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cbe1e138-46f2-4274-a792-02b10a0289c8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6e7a6f56-0fb3-43a4-953e-678dd14f33eb.png"
            ],
            "coords": [
              4,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f68e83ad-dd6f-4fad-b4f4-8cc0b3036162.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/28e7a178-6b43-4233-b9a2-dffbeeace56c.png"
            ],
            "coords": [
              13,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/59f5d93f-8ba3-4757-a706-92cf03c1e496.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/03b794b3-3b14-45a4-bed6-6a6039819453.png"
            ],
            "coords": [
              12,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/47443bb7-e4c1-4e8e-bf25-f3b1a73b5962.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d5256771-f881-4323-8f1f-1b41377d381d.png"
            ],
            "coords": [
              11,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/82769bed-ba15-4071-94db-6c5e5f71eb82.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8d5094af-41d9-471c-b4d2-e6619e6c1409.png"
            ],
            "coords": [
              2,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2163870f-77bc-4f58-9c72-c91c55ab8a69.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/77c21943-afe5-48f5-b9e3-84d9ec2c241b.png"
            ],
            "coords": [
              1,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a896fea3-7099-4372-b83a-baef07a04f72.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/89e4c7b5-77b4-4f0a-a345-7f5057c3e016.png"
            ],
            "coords": [
              1,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/59a17fc7-2539-47ba-9b56-c9e7f2a5067b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/489ae13d-c7f7-42b3-a46e-38c77ac3aedf.png"
            ],
            "coords": [
              16,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d7227e88-e9d8-42e6-9f47-646692abeec4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/372b27a7-2c98-48ee-aca5-26ebb0aae381.png"
            ],
            "coords": [
              10,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/888407cb-2a88-4851-8b40-a6da67953ac9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a12e18e9-2df7-4d7f-8fc0-e61daf62750a.png"
            ],
            "coords": [
              3,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/828e10f8-7c8b-4aa7-9562-342f1919f57d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9e519ca2-ca04-49b9-af5b-3c5bf687a895.png"
            ],
            "coords": [
              7,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9a170f0b-be7b-4500-ad97-db647e94f73b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/07be42d7-55b2-48d8-9603-c94f5aec320e.png"
            ],
            "coords": [
              2,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dbf1770d-1aa0-46fa-88ab-01432ff813fd.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/43cffd96-f369-4181-86ba-6b9c56a75e9c.png"
            ],
            "coords": [
              9,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/951e73ca-2b36-4dcb-ab6c-c2f48ab86c66.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bfe31a89-49d2-4d4f-965f-917d1b8e9c9c.png"
            ],
            "coords": [
              4,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/62bb7ce2-811f-47ae-8c15-78296cea94b1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d1e006fb-3aa6-497b-ae2b-d7c6326af7d9.png"
            ],
            "coords": [
              7,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3392dd70-d9b0-460e-93a7-6ed54792a8e7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/010b12e5-2eba-41d7-9c0b-4a54fe3eab56.png"
            ],
            "coords": [
              11,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0583f265-b3ba-477a-8595-26fd01408469.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/91638530-74db-4a48-ab39-6f1ac3c62f16.png"
            ],
            "coords": [
              1,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4ac2bda4-11df-4168-bb01-77d290c7b417.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ff7d7676-28c7-4861-877c-6c17d4010503.png"
            ],
            "coords": [
              4,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a4adcdd7-3f51-4d87-b790-f280953f6d1a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d53d2e82-3ba7-4bed-843a-179d141ed7d9.png"
            ],
            "coords": [
              11,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/88c2b297-576c-411a-8055-4b689d55fc89.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d52b4bd9-b20e-48d3-8079-43df88e1a12e.png"
            ],
            "coords": [
              1,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ed0ff532-c310-4b0c-8861-75eadf27dcd5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ee8f62d6-7f07-497b-a5d7-5fe0c1d923e7.png"
            ],
            "coords": [
              14,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1cfdaf61-0e20-48a2-afaf-a7587ca075ee.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4afdde08-1c41-44ac-8eae-bac29eeb083e.png"
            ],
            "coords": [
              4,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/db6b141c-4a32-44a0-aafc-8e806cef80bb.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a6414a57-fd64-49ef-9343-54bdf6968454.png"
            ],
            "coords": [
              14,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c45e4bf6-e4a6-4b86-8bba-c25d044ffa37.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0c5769f4-d369-458d-ba5a-8770ce884034.png"
            ],
            "coords": [
              15,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b69d1451-cb51-4735-aabc-96f67c93092e.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/240754b6-c8e8-4343-bf09-26f1e1638850.png"
            ],
            "coords": [
              6,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/631bacb5-afd7-412c-a336-ed5e69d59e09.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/aaf7214b-8dd1-4f46-8890-6e76ed616660.png"
            ],
            "coords": [
              14,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/df1898da-5016-4410-831a-e983d168cac3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1d38cb03-42d2-41ff-97be-73937901cbd6.png"
            ],
            "coords": [
              3,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a36501e4-c7d7-4f2d-9901-a6020e8afe62.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/da4b5e92-c562-4719-8b4a-263a0635ecd9.png"
            ],
            "coords": [
              17,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/83570ca8-03db-4905-959b-a33e3f9ce952.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d540f1e1-8ff3-4b8b-97b9-b5179dad8060.png"
            ],
            "coords": [
              1,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/31c0def7-8493-4578-9cb0-6809c168c8d6.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/99dd725d-88d2-4541-9c70-dff96d8bb034.png"
            ],
            "coords": [
              2,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/344a3305-793f-4e66-9d57-a7eeb3be9347.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/52085891-047c-44b1-a9a1-990ad9e3c81f.png"
            ],
            "coords": [
              8,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/609b453a-6494-42e3-9a70-47f888ea6c09.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/120dca93-3343-4f95-9ecf-f15c3ad65607.png"
            ],
            "coords": [
              4,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ea6f816f-223e-40a3-9186-ae1f0a636a02.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e80b85e9-d9ea-4150-9214-02642fcb7f7e.png"
            ],
            "coords": [
              14,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e35a70b0-8a67-48b6-9209-d054851724ba.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d1822b86-369e-435d-8e4c-17beadeb4cc4.png"
            ],
            "coords": [
              14,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/86bc0450-f0f2-436b-96a7-14320d9f1c22.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ab67e77c-9242-4735-a26a-5a286f89e329.png"
            ],
            "coords": [
              3,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1889b712-025f-4be5-90a7-0b371cb9c6df.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7046b0cd-ec28-437e-af1a-dcb1f41cc69e.png"
            ],
            "coords": [
              12,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6a0e5f45-3ffd-4a36-9124-f8eac8d1fbea.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/966bc55b-2fe4-462f-a00c-84d4387ff237.png"
            ],
            "coords": [
              5,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/61b5a0d9-0c62-44e8-9644-68662aa49415.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ba9e06bc-7567-4717-b4b8-46e12f6d7b60.png"
            ],
            "coords": [
              17,
              8
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0720880e-4f2c-4867-8971-56e0aac6c94c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5554e90d-0e85-4776-99da-cb088c44a736.png"
            ],
            "coords": [
              2,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7bb3055d-a033-44bf-a73c-7674c7bb52f1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7fb5fe7c-48ba-45b8-8c4a-cc250f40a40a.png"
            ],
            "coords": [
              14,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7791990d-fbe7-4e7a-9b10-e5e82c5c81a5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/baf751cb-f28a-4d01-8135-6fb4fe762824.png"
            ],
            "coords": [
              12,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bd92bdda-cd85-41d0-8a18-6a1d49f659ef.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1f80de52-0d9e-479d-b58e-c213629fb880.png"
            ],
            "coords": [
              6,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/85667fa3-0aef-4b48-a06d-d0cd5efe21f9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5186a422-138c-4c70-850a-ece993030a59.png"
            ],
            "coords": [
              1,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2eab97c2-e975-494f-96dc-5d37457e0353.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f5f915bd-5f04-4b4c-91a7-dec0cf241596.png"
            ],
            "coords": [
              15,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/65de2195-d5bd-407a-a5b7-a6a5dcda71c3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9db72991-b4c2-4e7c-b281-843ad86c5907.png"
            ],
            "coords": [
              16,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9c0da5e1-d63f-489d-a9db-5d57e2d1f4aa.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6066ff74-99c2-4e4e-9796-14c4f4bde9a9.png"
            ],
            "coords": [
              11,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/34996c53-927f-481f-999f-1a7909cfe1ab.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d6b1d8b5-9968-40fd-920c-3cb6dbeef35a.png"
            ],
            "coords": [
              17,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3b36e6f6-3f63-4d8c-9a31-9874ce6c11ce.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a0f6b82e-3c98-4375-bbca-8429593f5089.png"
            ],
            "coords": [
              7,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5dca013d-88af-496b-912b-0783c39ed234.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ad8601b6-4fc8-448a-8ef4-440839de2a65.png"
            ],
            "coords": [
              7,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/18bac26d-0950-4154-b569-d0cd5f1af43d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2efe5d48-fcf0-4432-a9dd-e0069f5a2013.png"
            ],
            "coords": [
              2,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f4be8584-1a94-4731-8fc7-70916cbeded2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/53657703-01de-4e97-bfd8-298946d60068.png"
            ],
            "coords": [
              7,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1355f1da-fcc1-4437-b998-47a49016cf77.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/03d84d46-4549-4c67-8a12-e1bf380a64c8.png"
            ],
            "coords": [
              17,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/965dd9a4-a545-48fb-9c5f-69df3a534607.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/61715b1b-5811-495d-a38b-06cb635d01b5.png"
            ],
            "coords": [
              13,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c14d30db-ab8e-46f0-a28c-c95af5b92d2b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a10db28d-ddf5-4044-9ca9-2a582ecdc562.png"
            ],
            "coords": [
              10,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a44dcd9f-d8cf-4823-ab42-c38a77b88886.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/97a33855-f13a-4b87-8ba4-f93f0ac0c06d.png"
            ],
            "coords": [
              13,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0908db6a-b11b-4e6f-a4fe-5acc1888e0bc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9e047be3-3443-4988-9d63-2647867983df.png"
            ],
            "coords": [
              15,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fcc14ed6-44f9-437c-98f2-783416600745.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ff412565-4a48-49e6-b2c0-1f6bbe4cd561.png"
            ],
            "coords": [
              12,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0110fe8e-4d27-4faa-9da5-4c1df3fc8a7a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b2ca16cf-67e2-4a0f-9c94-05b77106d64a.png"
            ],
            "coords": [
              12,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a9796e57-c143-4f44-982d-d7ede6e8ac9d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/afaa9143-1e5c-446e-a0d1-3a29b15cdc85.png"
            ],
            "coords": [
              17,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/48431d52-a66c-499a-9e29-18e3ef9eaa48.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2aa51217-8114-431d-9a87-8ab04cae73ae.png"
            ],
            "coords": [
              17,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d98c04b5-ad19-4bb0-b412-b716886aff90.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/87623640-0ffc-46f4-b8f6-dcd2971c1c51.png"
            ],
            "coords": [
              10,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7bd7801d-97fc-4d2d-856b-cc9c50bd6b25.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/beb1cdeb-e117-4680-919d-b1c3a9ee9dee.png"
            ],
            "coords": [
              6,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2fc260df-4cd7-4f22-b10f-0dcd5c137c60.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1cfc2b85-6632-4c7a-a966-af39e8510ee7.png"
            ],
            "coords": [
              10,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5182c98b-7654-492b-8866-9192057eb706.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dfe7cedd-363a-416b-85b7-b2300d272740.png"
            ],
            "coords": [
              10,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/aa3dc5e6-1710-4f40-a5ef-a0463166ab8d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fc68cca8-6055-4a73-9e00-80c99d7b433f.png"
            ],
            "coords": [
              15,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e5bca38b-0b08-457c-a7f4-f0be50048a32.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/303d1000-469e-49c4-a921-94ea41ba44c6.png"
            ],
            "coords": [
              13,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1115ab41-dfca-4187-9ca7-0577ec946ba8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/917a3a96-803e-404d-a152-b69221085e4d.png"
            ],
            "coords": [
              9,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2df509ea-cf56-4b23-b925-4e8b4b202692.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fc03be81-e7d3-44cd-9465-74591d6769db.png"
            ],
            "coords": [
              7,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7296f0ed-0dc9-4d3b-9005-5ffe8d4e20a5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d265e71f-a10e-459a-abe4-5f0e36ac718d.png"
            ],
            "coords": [
              3,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/43910f60-4935-47b7-8981-a5c1df776fed.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1127bfe2-7967-4ebd-8c0c-08937e93ff30.png"
            ],
            "coords": [
              14,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f2ff08ba-fd1a-4dd2-91ec-1bdfce532994.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4fc2dd84-2e4f-40d9-9f98-352390ab6fe1.png"
            ],
            "coords": [
              9,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/11db2cff-e19a-4665-bb48-433c8da64d66.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7e952c96-3c26-4ee1-a9dc-eb1baf31ed36.png"
            ],
            "coords": [
              13,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/50b141e2-7ca8-4135-806d-9dc0753cade0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/73628f36-b84b-4437-a389-69b8f17ff40e.png"
            ],
            "coords": [
              15,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/68402365-8411-445b-b164-5d1ff07715c3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/61685810-c649-4016-9d14-9da750e35322.png"
            ],
            "coords": [
              15,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/179cc2a2-0786-4ce5-9575-3ac13c9b691a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/33a307af-9c50-47ed-9629-1cb000f565c7.png"
            ],
            "coords": [
              4,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/df42f4ea-8a13-45e2-8e36-ccc4db9fdb35.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/18550034-744f-435a-9bd1-0f3e3e75433d.png"
            ],
            "coords": [
              17,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a40ff512-d070-42b6-88cc-45581363ad9b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a1023c0e-bae6-4a87-a2c9-0f411f8302b1.png"
            ],
            "coords": [
              16,
              22
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7afb3896-dc0e-4e45-aabb-b96ff03a75f9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/43910c6b-3360-4c44-bd8e-bf32517cb9ac.png"
            ],
            "coords": [
              10,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ec37786c-3865-4be9-90f4-ecaea974761f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1608c38c-1bb8-4745-ae70-1d1de3843d20.png"
            ],
            "coords": [
              6,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/855b28cd-3d00-4f80-b86b-5904d1758a93.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a2837ed4-264b-48a9-8523-f12830b5d9e4.png"
            ],
            "coords": [
              8,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cac1beb8-d7ab-4148-a101-3697a628e2f1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e4e7e6da-da3e-4ae3-95b2-f14b6523b7f3.png"
            ],
            "coords": [
              1,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9690072c-544a-4e7b-a2c3-5c772bac4459.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/06a573be-321f-48da-8526-eb46812fec08.png"
            ],
            "coords": [
              14,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/533a02c4-123b-436b-8d45-e438eb9d4535.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8906a3d7-41b0-4ffc-83fd-07fa7452776e.png"
            ],
            "coords": [
              4,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0eff8610-8bd9-4228-b0ba-944f45d67475.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c8f67697-78d9-43ce-8466-5ec1c47c1f0e.png"
            ],
            "coords": [
              15,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/279a0976-6d3e-4454-9cf3-8ad7bcc2ffbe.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/26498aaf-562e-4357-ba80-5bc807ab84f8.png"
            ],
            "coords": [
              10,
              11
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a42dd76e-d323-40e9-8e2a-a1e327996bee.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/70009e09-abc3-4986-832a-34a537b7cbd5.png"
            ],
            "coords": [
              12,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1247422a-25a1-4abb-8891-0fbe1d3fe064.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/21def9fb-1e50-43be-8300-aced73e55f17.png"
            ],
            "coords": [
              12,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/de82e50f-061c-4b30-8bc1-8a0374996a21.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0e6046d8-c1cc-4ff9-aed4-05ccbdbe481e.png"
            ],
            "coords": [
              10,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/79dd6770-0e40-4b17-ad11-01b91346a890.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/25fdb333-7bb6-478a-b961-b4e3fdfa5825.png"
            ],
            "coords": [
              7,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4ba9023d-35a2-4ae5-b286-45e2a6c53a5f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bd509127-c5c0-4c61-b883-2c2c5a249d01.png"
            ],
            "coords": [
              6,
              29
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b9322b17-6517-4a58-9c06-96d48049a2e5.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1dc2ce68-b234-41c0-a2df-0dee6e7045c6.png"
            ],
            "coords": [
              10,
              26
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6cbb9e0c-9f19-4ca0-b154-ec3c6dc09bab.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d00b3522-2175-4679-86ba-f8f29622ae40.png"
            ],
            "coords": [
              8,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/142fe3c7-2ccc-465e-a274-2ea28d82a766.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/485bf16f-e42a-47ec-beb1-a6108fffd7d9.png"
            ],
            "coords": [
              13,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ff7d6e58-9f0b-4752-aef4-6474bcee9ade.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ffa3d937-3d05-4ad6-a235-3a0de16e37a3.png"
            ],
            "coords": [
              3,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/66591998-4cf5-4b1e-a55a-5bf06b610e4d.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a5f1886e-bd53-4af4-b598-5b4939374606.png"
            ],
            "coords": [
              13,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/05ca93d7-a140-44b3-9141-48a4aab3afbc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/06fb12ea-d2ed-4e1b-a272-e1ad24adc22f.png"
            ],
            "coords": [
              9,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ce18b56b-2484-42d0-a371-72bd15fa374b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d9b8f827-4b19-446f-a928-493abb32a757.png"
            ],
            "coords": [
              5,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dfcec977-906b-46a8-b21b-540d78bfd61b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2814b170-0bd1-48e4-86a5-ce7154f45f8a.png"
            ],
            "coords": [
              9,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eb4726c7-87a0-4f9f-a813-74cbce165c02.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e1c621ea-c6e7-45db-ba29-5888e2b8a510.png"
            ],
            "coords": [
              16,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a28839cc-2bb5-464e-b7ab-501d20212b95.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d5ab2c00-fa07-4849-be9d-0c03f85698b9.png"
            ],
            "coords": [
              5,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e68f8035-4ecb-4866-821e-33812ddd11ef.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9e99cb1a-4faa-4469-855b-8a7a4a353a0e.png"
            ],
            "coords": [
              12,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1f60aeb2-cd4f-4a46-8572-4bd16f5128b4.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/02d05c02-9076-4417-989c-6f047a70a794.png"
            ],
            "coords": [
              4,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f93bba18-ff51-4192-b1b9-38c4fe0b308f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/85ea5b94-0aac-4fb4-becf-034d2d3901fc.png"
            ],
            "coords": [
              16,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/84fa4974-afd0-4dab-95d6-24a2e6f7552f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0fda825b-c1ad-4fe2-9b2d-2dfc41edf87a.png"
            ],
            "coords": [
              5,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/27378498-ec9e-4d3a-bca9-00393592e733.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/849a6431-ab51-493f-b226-c34885e97bed.png"
            ],
            "coords": [
              16,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/576067d1-2138-4f98-a3fc-78f50245eb91.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/44782fdc-2ebd-4be1-bbd5-921801cdcc7d.png"
            ],
            "coords": [
              5,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/075291f7-0612-4ed7-9a97-0fb30da3cb04.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/00c50ba7-73ff-4535-9684-c1729b157d3b.png"
            ],
            "coords": [
              2,
              19
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cc7ffd93-d325-4d83-9684-5f3cd23bf333.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/22e584fd-2fc4-412d-a10f-e50fbfd79929.png"
            ],
            "coords": [
              9,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8750c07d-c9bb-429c-9067-14baff25bd3b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/29e33931-b1d3-4f57-961d-a1f6cba3b3b3.png"
            ],
            "coords": [
              8,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6472a301-24d4-4daa-8189-8a4b3c24d2ed.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d34c648f-c680-4d22-bde1-e20c05d738ae.png"
            ],
            "coords": [
              12,
              3
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e7613053-845c-4610-a669-dfaf998ad5d9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/001b1b63-2c8c-4f8d-aed3-b2ec48a21d9f.png"
            ],
            "coords": [
              1,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4722c75c-f99c-454b-80ba-cf5d4ea9c7b0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b6cb6ecb-530e-4a94-82d4-22c1912caae1.png"
            ],
            "coords": [
              6,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/19c60818-6f83-4701-b98a-46f451363cf1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b0ad56f6-3277-4ff5-b6de-7a9c7921b65a.png"
            ],
            "coords": [
              15,
              5
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bac57407-6dcc-46bb-869c-791b41c882b2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1551b06e-2180-4c0c-ac62-bfe05c1407b7.png"
            ],
            "coords": [
              17,
              12
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/228cea16-c3f7-4425-ba24-7a497a13f8a1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2d279589-22ec-4b6d-88ce-7d45c61e2020.png"
            ],
            "coords": [
              14,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/934e1f39-f2ae-412a-95fa-cd5d1a26895f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/209d402f-e775-4bb6-b66b-84ff3205fd88.png"
            ],
            "coords": [
              7,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ba49611d-cb6b-4388-9291-9bd2e87f6d83.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bf01d482-bb94-4551-8d7c-15055a7e06a3.png"
            ],
            "coords": [
              5,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/db36d3d7-8fe7-4d9b-889b-b29f011981c1.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/22a79b33-2305-42d9-ad3c-8943021c74d7.png"
            ],
            "coords": [
              7,
              16
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/81951359-f1c7-40b6-a2f8-a27e63f8be85.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/23bd4dc0-760a-46bd-8cf7-adf6a552a32d.png"
            ],
            "coords": [
              5,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/50921c61-3e09-4f5e-8148-62075709bdc0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8e675588-ce33-401d-887c-630132de9d48.png"
            ],
            "coords": [
              12,
              4
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d3ac26ed-9276-4d31-a45c-74149ec29bdd.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/68246a89-009e-4c15-aabc-18b6a84d6ed0.png"
            ],
            "coords": [
              15,
              6
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c6821aef-8d49-4a35-bd50-cc89d73f09d9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5c82e778-a756-4b4e-bae0-1882a05349bd.png"
            ],
            "coords": [
              12,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/399bd65b-b275-40bd-907e-49e0b476103f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/75d71cec-d490-42a4-850c-692252129c4e.png"
            ],
            "coords": [
              17,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/d99e84ad-ea4e-492c-af21-2729561d31cc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/68a82ff3-6547-4ccd-bf8a-ad3fb7e5ae2a.png"
            ],
            "coords": [
              1,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/52690172-d6f7-452b-8ea4-03f8b2b4ac36.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b9f96d6d-3c8c-4b1b-89ff-b2eb7eb78102.png"
            ],
            "coords": [
              9,
              13
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/defe41da-6264-45df-aa11-c16717f19bca.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ce1268c9-bb8b-4d3d-a0e8-1f738b8fcb4d.png"
            ],
            "coords": [
              3,
              27
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/67523ac6-9ed7-416d-80a5-b500b541f284.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5a499b30-1144-40df-ab56-4d12142cc266.png"
            ],
            "coords": [
              9,
              7
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c4bb3452-7f3b-4e39-a9a5-795e1c926d18.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cbab06da-c9cd-4bd5-891b-7c1a24cb1987.png"
            ],
            "coords": [
              10,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c04c6e8e-44fc-461b-b7ea-6b695881fe7a.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dd54c7d5-45ec-4686-8d56-aa94f369792e.png"
            ],
            "coords": [
              11,
              9
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eb2c0b92-c2c0-4b93-a6bf-a5740e866b5b.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/653c7c11-a253-46a2-bc4f-3834b5732b68.png"
            ],
            "coords": [
              11,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4f792c6f-5cfa-4612-8164-3ed32c937de3.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/43b6ac61-748a-48b8-af37-cc954fa25425.png"
            ],
            "coords": [
              5,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/7b6933ec-497e-4cf6-89a0-b05bd56adaec.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/61e6f8c1-19bb-48ea-b080-9677e0b1ac81.png"
            ],
            "coords": [
              2,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/3a08487e-9759-4f78-8c76-f89d1cf8b797.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/93c978f5-3f7d-4105-a945-49a880f7b9e8.png"
            ],
            "coords": [
              15,
              24
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/ded01343-dda8-4a51-98b6-cfe2cfd6ff39.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2caeeefa-4970-4f88-beea-8a31afdf7c42.png"
            ],
            "coords": [
              14,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8fad1f8e-931d-473b-ae24-16ecc3fc72a0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/48e22286-a1b8-4204-9e9d-567f15098ff9.png"
            ],
            "coords": [
              6,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/31252ede-a521-48c0-865a-c7a6ce607bc8.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1bd4676f-4c0a-4b56-9fa3-1e42b03a7a95.png"
            ],
            "coords": [
              6,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/57d6fc0c-f46b-451b-afa8-3a6cf4a08c17.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8a57ef6f-0732-4b54-b96e-c62cd2487285.png"
            ],
            "coords": [
              12,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c57ca8ec-e2fc-4153-acdb-0bec2421ae93.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/9edb3b15-753a-408b-b561-f6af611fb266.png"
            ],
            "coords": [
              7,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/84be0fb8-3a1a-4102-8713-77a4dadbebd7.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/321fb4e0-2a29-4c2a-a0f3-cf89803f2022.png"
            ],
            "coords": [
              4,
              1
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/eb210751-0ead-47cb-bfc5-25c1bd676d6f.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/fb292128-c9aa-425f-911c-1f2931c33447.png"
            ],
            "coords": [
              5,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6430d9e2-f9e4-4f4a-a909-4e934bec5d95.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/973d8881-4bff-4936-a471-18fb775ce9f3.png"
            ],
            "coords": [
              15,
              20
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/feb19479-7f4a-4f04-afb9-5ab835d4ac46.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8362b35c-11d6-49e0-976a-970a698a24ae.png"
            ],
            "coords": [
              9,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/c6ab84de-f0ad-4a55-8d5e-37fc989ccb09.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1bdc6970-78be-4685-8a5d-72ac2d4ea28f.png"
            ],
            "coords": [
              11,
              15
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f27f4514-28a9-4a84-a805-a6776d351280.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/2f0dbdff-d9cf-467b-810c-0b39e0d583ad.png"
            ],
            "coords": [
              10,
              2
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/58703575-a9bc-4931-b32e-c40a96830468.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/1e7b9614-bee2-4e68-abe0-a30a24b4b848.png"
            ],
            "coords": [
              8,
              18
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/73fbd9f5-af42-4590-a9ca-be8ef0b47ac0.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/926a3ad2-fa74-43fd-ad18-266d7ebc6958.png"
            ],
            "coords": [
              2,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f93c0ed5-fc72-467f-b030-6072a41979bb.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/e627a0ef-2408-48f8-8d15-74a1a4b35c8d.png"
            ],
            "coords": [
              12,
              17
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/355561c3-0a3f-4090-8e63-bd77d5f1d8c2.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b3cf9610-8031-4acf-9697-931756ed820d.png"
            ],
            "coords": [
              3,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b2028b39-c950-4923-ad4a-f3e2e99f56ea.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8a2e0966-8f90-4e63-b752-3b8c86274fe9.png"
            ],
            "coords": [
              10,
              21
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8a2ad6d0-9ace-4859-8809-bad5062e0b3c.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/4ab6f8cc-e98f-457a-b20e-25bbb4382d3f.png"
            ],
            "coords": [
              15,
              10
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/5ba94eb5-0e88-4688-bdf4-a96d80e01336.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/30f6a432-89e3-4d4b-8c42-03b3de1cfcf3.png"
            ],
            "coords": [
              1,
              28
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/8ca80a8a-1d95-4ebe-8233-2de2fdac1fbc.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/0d2ae4b1-1230-4bb2-97c8-c01e2aaf5370.png"
            ],
            "coords": [
              12,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/b032c213-f595-4dd5-90b6-e44d890babbe.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/a34d44c0-f5a7-4e1f-8727-a6121b70a939.png"
            ],
            "coords": [
              11,
              30
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/33cf4016-9e74-49d7-9c0c-a5c4005675e9.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/6edd8523-44bc-4989-8341-fc84977c4e03.png"
            ],
            "coords": [
              4,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/310a3a3d-fae9-4164-aeda-25c82c6a8b67.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/24748dee-37a3-4d52-89b8-83c99abbeead.png"
            ],
            "coords": [
              8,
              14
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/30304425-83c5-4068-acb0-094309141dce.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/701036c9-5104-49cd-98cc-e19075ff0fd0.png"
            ],
            "coords": [
              14,
              23
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/cfbc3a08-4b1c-4474-bf81-56f5a661b7ed.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/bef3c22f-9c32-43ac-acd5-45d758143851.png"
            ],
            "coords": [
              7,
              25
            ]
          },
          {
            "url": [
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/f7e48b91-5b88-4af0-91f3-0516d6d00088.png",
              "https://gkh-images.s3.ap-south-1.amazonaws.com/9dec/dc25b9c8-05f2-4533-8eb5-a1608f21b098.png"
            ],
            "coords": [
              12,
              20
            ]
          }
        ]
      const data: any = e.map((e: any) => {
        return {
          imageId: new Date(),
          row: e.coords[0],
          col: e.coords[1],
          url: e.url[0],
        };
      });

      setGridData(data);
    // });
  }, []);

  /** State to manage the full-screen display of the image */
  const [fullScreenImage, setFullScreenImage] = useState<{
    url: string | null;
    imageId: number | null;
  }>({ url: null, imageId: null });

  /**
   * Handles changes in the number of rows input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleRowChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNumRows(+e.target.value);
      localStorage.setItem("numRows", e.target.value);
    },
    []
  );

  /**
   * Handles changes in the number of columns input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleColChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNumCols(+e.target.value);
      localStorage.setItem("numCols", e.target.value);
    },
    []
  );

  useEffect(() => {
    const numRows = localStorage.getItem("numRows");
    const numCols = localStorage.getItem("numCols");
    if (numRows) {
      setNumRows(+numRows);
    }
    if (numCols) {
      setNumCols(+numCols);
    }
  }, []);

  /**
   * Handles changes in the cell width input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleWidthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCellWidth(+e.target.value);
    },
    []
  );

  /**
   * Handles changes in the cell height input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleHeightChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCellHeight(+e.target.value);
    },
    []
  );
  /**
   * Adds a random image to the grid with zoom effect.
   */
  const addImageToTheGrid = (data: any) => {
    // console.log(data.image);
    const randomImageId = Math.floor(Math.random() * 1000);
    // Set the flag to indicate that an image is being added
    // setIsAddingImage(true);
    const binaryString = atob(data.image);

    // Create an ArrayBuffer to hold the binary data
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    // Fill the ArrayBuffer with the binary data
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: "image/png" });
    const url = URL.createObjectURL(blob);
    console.log(url);
    // Show the image in full-screen for 3 seconds
    setFullScreenImage({
      url,
      imageId: randomImageId,
    });

    // After 5 seconds, add it to the grid and reset the flag
    setTimeout(() => {
      setFullScreenImage({ url: null, imageId: null });
      setGridData((prevGridData) => [
        ...prevGridData,
        {
          imageId: randomImageId,
          row: data.coords[0],
          col: data.coords[1],
          url: data.url,
        },
      ]);

      // Reset the flag to indicate that image addition is complete
      // setIsAddingImage(false);

      // Check if there are more images in the queue to add
      if (queue.length > 0) {
        const nextUrl = queue.shift();
        addImageToTheGrid(nextUrl);
      }
    }, 3000);
  };
  /**
   * Handles the click event for adding a random image.
   */
  // const handleAddImageClick = () => {
  //   // for (let i = 0; i < 3; i++) {
  //   addImageToTheGrid();
  //   // }
  // };

  useEffect(() => {
    // Listen for 'message' event
    socket.on("image", (data) => {
      console.log(data);
      const blob = new Blob([data.result.image], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      setQueue((prevQueue: any) => [
        ...prevQueue,
        { url, coords: data.result.coords, image: data.image },
      ]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("image");
    };
  }, []);

  useEffect(() => {
    if (queue.length > 0 && !isPlaying) {
      setIsPlaying(true);
      const data = queue.shift();
      addImageToTheGrid(data);
      setTimeout(() => {
        setIsPlaying(false);
      }, 3000);
    }
  }, [queue, isPlaying]);

  return (
    <div
      style={{
        //make the grid container responsive and center at the screen
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        gap: "20px",
      }}
    >
      <div
        onClick={() => {
          setHide((prev) => !prev);
        }}
        className="grid-container"
      >
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {Array.from({ length: numCols }, (_, colIndex) => {
              const cellData = gridData.find(
                (data) => data.row === rowIndex + 1 && data.col - 1 === colIndex
              );

              return (
                <div
                  key={colIndex}
                  className="grid-cell"
                  style={{
                    minHeight: `${cellHeight}px`,
                    minWidth: `${cellWidth}px`,
                    maxWidth: `${cellWidth}px`,
                    maxHeight: `${cellHeight}px`,
                    backgroundColor: "transparent",
                    border: "0.01pt solid #000",
                  }}
                >
                  {cellData && (
                    <animated.div
                      className="zoom-image"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${cellData.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex:
                          fullScreenImage.imageId === cellData.imageId ? 1 : 0,
                      }}
                    ></animated.div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {fullScreenImage.url && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={fullScreenImage.url}
            style={{
              minWidth: "40%",
              minHeight: "40%",
              borderRadius: "18px",
            }}
            alt="Full Screen"
          />
        </div>
      )}
      {!hide && (
        <>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label>
              Rows:
              <input type="number" value={numRows} onChange={handleRowChange} />
            </label>
            <label>
              Columns:
              <input type="number" value={numCols} onChange={handleColChange} />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label>
              Cell Width (px):
              <input
                type="number"
                value={cellWidth}
                onChange={handleWidthChange}
              />
            </label>
            <label>
              Cell Height (px):
              <input
                type="number"
                value={cellHeight}
                onChange={handleHeightChange}
              />
            </label>
          </div>
        </>
      )}
      {/* <button onClick={handleAddImageClick}>Add Random Image</button> */}
    </div>
  );
}

export default App;
