import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form.current,
        "SybVGsYS52j2TfLbi"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.result();
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm onSubmit={handelSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;



// {
//   title: "Certificates",
//   skills: [
//     {
//       name: "Innovanza'24",
//       image:
//         "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAEDBAL/xABCEAABAwMBBAYGCAQEBwAAAAABAAIDBAURBhIhMWETQVFxgbEHFCJykaEyNkJDUmKywVN00fAjgpLhFSQzNERUZP/EABkBAQEBAQEBAAAAAAAAAAAAAAAFBAMCAf/EACYRAAICAgIBBAMAAwAAAAAAAAABAgMEIRExEiIyQXEFM+ETQoH/2gAMAwEAAhEDEQA/ALxREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARF0VdbS0bQ6rqIoQeG24DPcvqTfQb4O9F5aS40VaSKSqhlcN5ax4JHgvUjTXZ8TT6CIi+H0IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAL4mmigidLPI2ONoy5zjgBYG8arpKHaipMVM43eyfYb3nr7h8lCrlc6y5y9JWTFwB9lg3Nb3D+ytNWLKe3pGezIjHS2yTXjWIG1FamZPDp5Bu8B/X4KI1E8tTM6aokfLI7i55yV1oqNdUa16UYp2Sn2fUb3xvbJG9zHtOWuacEHkVKbPrCWLZiujTKzh0zB7Q7x1/wB8VFESdcZriSPkLJQfKLcpKunrYRNSytljPW0+fYu5VLRVtTQTdNSTOif144HvHWplZ9XwVGIrk0U8n8QfQPf+Hy5qfbiyjuO0ba8mMtS0yUIuGuDmhzSC0jII4FcrKaQiIgCIiAIiIAiIgCIiAIiIAiKLaxvk1EW0NE8sle3akkHFreoDmd691wc5eKPE5qEeWZa73yitTcTybc2N0LN7vHs8VB7xqKtum0wu6CnP3UZ4+8evy5LEklxLnEkk5JJ3lcKnVjwr32zBZfKeukERZqx6cqrqBK49BS/xHDJd7o/fzXaU4wXMjlGLk+EYVfcUMswzDFJIPyNJ8lZVv09bKAAx0zZJB95N7Tv6DwwsqAAMAYCxyzV/qjVHEfyyoZKeeIZlglYO17CF1q4ljq6yW2vB6elj2z94wbLviEjmr5QliP4ZVyKRXvStTQNdPRudUU43kY9tg5jr8Pgo6tcJxmuYmWUJQfDMjab1W2pw9Xk2os74X72n+ngpxZ9R0Vz2Y89BUH7p54+6evz5KtkXO3HhZv5Old0ofRcSKA6R1a03SKy1lT0z5ciJxOSwgZ2Se4FT5TLapVy4ZvrsVkeUERFzOgREQBERAEREAREQBVxrL6w1Hus/SFY6rfWP1hqPdZ+kLXh/s/4Zsr2GFRF3UdM+sq4aaL6crw0Hs5+HFUm+NmBbM7pOwi4yet1bc0sZw1p+8d/Qf31qfABoAAAA4ALrpKeKkpo6eBuzHG0NaF2qPda7JclSqtVx4CLFX2+U9njAeOkqHjLImnBI7SeoKGVeqbtUPJbOIG9TImgfM5K9V487FyujzZfCD4ZZCKtKfU13geD62ZB+GVoIP7/NS+wajgup6CVohqsZ2M5D/dP7ea+2Y04LkQvhN8GcUL1hYGxNfcqJmG8Z42jh+Yfv8e1Su4V9JbaV1VX1EdPA3i+R2B3czyVXar9KElQ2Sk0/F0cTgWuqpm5c4fladw7znuC9YsLXPmCPGTOuMeJsx1bX09Ezanfg9TBvcfBRq4XyoqsshzDF2NPtHvKxj3ukcXyOc5x4ucckr5VqMEiLK1vozWjDjVtox/7cfmti1rnoz62Wj+bj81sYpf5H3r6Kf479b+wiIp5QCIiAIiIAiIgCIiAKt9Y/WGo91n6QrIVb6x+sNR7rP0ha8P8AY/ozZXsMKpFoWnEt5dKRuhiJHInA8sqOqWej7HrVb27DPMrbkPipmShc2Imy66mZlNTyzyfQiYXu7gMrsWN1IHGxV2zx6Enw6/kpMVzJIpyfCbK2raqWuq5amc5kkdk8uwDkF0Isbc73SW8FrndLN/CYd47z1K2l8Ijt/LMkSAMncAsRWajZRyNNAeknYctkB9lpHmo7WXme4nZldsM6om8P915V1jBPs4Tta0j33m83C91XrNzqnzyfZB3NYOxo4BejTmna/UdRNBbREXxMD3dI/ZGM4WIV4+j+t0zUkx2KmbFWspmesOEJZnhnf171zyLHTX6F/D1j1q+z1v8ApSdVA+lqpqaXHSQyOjfg5GQcHyWX09pW56hhqJbcIS2nID+kfs8QTu3clItf1+l5pmRWumaytjryaxwhLdoAuDt/XvVg6OrdN1dNWO05TthiYR04bEWZODjjx3ZXK3JnGpSUdnWrFhK1xctFM6M36ss5/wDrj81sYqcmrdN1mr9NHTFM2FraodPiIszlzdnjx61cayZ0vJxbXGjZhQUFKKfOwiIsJtCIiAIiIAiIgCIiAKt9Y/WGo91n6QrIVb6x+sNR7rP0ha8P9j+jNlewwqz+iKkQXsRuO6eNzB3jePIrALltWKB7KsyNjMLg8OccAEKhZHzi4mGEvGSZcK+JY2TRPikG0x7S1w7QV5LJdaW9WyC4UMgfDM3I5HgQeYO5e5RWmnwVk00a+64nulnu09qe008bd8cjeM0Z4OB6vDgQRlQ9bNam01bNTUQprnCSWZMUzN0kRPW0/sdxwFVlz9EF4hlcbbW0lVD1dITE/wCGCPmqtOXCS4lpk27FmnzHaK4XutFLV3K4U9voozLPO8MY39z2ADeT2BTSg9EV/nlArKmipYvtODzI4dzQAD8QrO0jo616Whd6m10tVI3EtVLjbcOwfhbyHLOcL1ZlwgvS+Wea8Sc36lwimdSaTu2nJD69BtU2cNqYvajPefsnkfmvBarvcLPK+W2VT6d8jdlxZjePFbKyMZLG6ORjXscMOa4ZBHYQq31p6ObaKSpudrnZb+iY6SSKT/o4G8462/McgvFObGfptQtwZQflUyp5pZJ5pJpnF0kji97j1knJK91rvt0tEcsdtrZKdkuOkDAPa+I5rGtcHDIO5cqi4prhonKUovlPZmdGfWyz/wA3H5rYxa56M+tlo/m4/NbGKT+R96+it+O/W/sIiKeUAiIgCIiAIiIAiIgCrjWQI1BOSMZawj/SFY6hfpK0lV6koY5bXMGVcIIMTnbLZ2/hJ7QeHVvOe0aMaahZs4ZEHKGitbpqSmpcx0mKiXtB9hvj1+CildX1NfJt1Upfjg3g1vcFxX0NXbap9LX00tPUM4xytwe/mOY3LzqwuPgkyb6ZMPR1rN+l650NVtPtdQ4GZrd5jdw2wPMdY7gr8pKqCtpo6mkmZNBK3aZIw5DhyK1TWf0rq+7aYlPqEofTOOZKWXJjdzH4TzHLOVlyMX/J6o9mrHyfD0y6Nk0UEsXpTsFxY1leZLbUHcWyguZnk8DhzICllJerVWt2qS50c7e2KdrvIqZKucPcihGyMume9F46m7W2kYX1VwpIWDi6SdrR8yoxevSbpu2Nc2CpdXzDgylbkf6z7PwJSNc5e1H2U4x7ZMXvbGxz3uDWNGXOccADtVJek7XTb442i0SZtrHAyyj/AMhwO7H5Qfid/UM4bV2vLvqYOgkIpKDP/awuOHe+77XyHJRVUcfF8H5T7J+RleS8YdHLXFpy04XeyYHc/ce1eddlPBNUzsgpopJppDhkcbS5zj2ADeVu54MLj5Ej0U0v1baAwZ/5ph3dgOVsWq09GOg6qz1P/F70AypDCKemBz0WeLnHhtYyMDgCevhZak5tsbJ+n4KuHVKuHq+QiIsZrCIiAIiIAiIgCIiAIiIDG3yxWy/Uvq11pGTsH0XHc5h7WuG8KodWei242vbqbI59wpBvMeB0zB3D6fhv5K8EXaq+dfXRysphZ2anOBa4tcCHNOCCN4PYuFsZqrQ9m1KDJUwmCsxuqoMB/wDm6nDv8CFTWq9C3nTRdLNF6zQjhVwAloH5hxb47t/EqnVkws10ybbjTr2tojCEA8QiLSZzgADgAuURAEJxvKzumdJXjUsuLdTYgBw+pl9mNvj1nkMlXHpP0dWfT5ZUTN9fr27xPM32WH8jeA7zk81ntyIV6fZ3qx52b6RWmk/Rvd77sVFYDb6E7+klb/iPH5Wfuccsq49N6WtGm4Ni2UwEjhh9RJ7Ukne79hgclmkUy3InZ30UqqIV9dhERcDsEREAREQBERAEREAREQBERAEREAXBAIIIyDxBXKICv9Wei62XXbqbMW26sO/YaP8ABeebfs97fgVUF+sF009U9BdaV8JJ9iTiyT3XcD3ce0BbPr5exsjSyRoc08Q4ZBWurLnDT2jNbiwntaZq3abXXXmrFLa6WSpmP2YxubzJ4AczhWzpT0T0lJsVOo5G1cw3imjJETfePF3yHerKiijhbsxRtY3saMBfaW5k56jo+V4kIbez4hijgiZFBGyOJg2WsY0ANHYAOC+0RZDUEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q==",
//     },
//     {
//       name: "SIH'23",
//       image:
//         "data:image/png;base64,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",
//     },
//     {
//       name: "Flipkart",
//       image:
//         "data:image/jpeg;base64,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",
//     },
//     {
//       name: "GFG",
//       image:
//         "data:image/jpeg;base64,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",
//     },
//     {
//       name: "Codeforces",
//       image:
//         "https://user-images.githubusercontent.com/71401229/134310137-945024ee-cb4d-4d77-a456-75bccf66307b.jpg",
//     },
//     {
//       name:"CodeChef",
//       image:"https://image.pngaaa.com/134/6179134-middle.png",
//     }
//   ],
// }