import styled, {css} from "styled-components";
import photo from "../../assets/portrait4.png";
import portfolio from "../../assets/Arcade.jpg";
import artIo from "../../assets/AGBackground.mp4";
import MLImage from "../../assets/avmML.png";
import camera from "../../assets/camera11.png";

const cgtv1 = `https://www.youtube.com/embed/v9dIysPyKPw`;
const cgtv2 = `https://www.youtube.com/embed/elDxznCvpdY`;
const cgtv3 = `https://www.youtube.com/embed/tB7sPm8T3_s`;
const cgtv4 = `https://www.youtube.com/embed/hOh5uqmo_7U`;
const cgtv5 = `https://www.youtube.com/embed/hOh5uqmo_7U`;

export const Library = {
  routeName: [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ],
  contact: {
    name: "Contact Us",
    path: "/contact",
  },
  videos: [
    { id: 0, portPic: portfolio, portVideo: artIo },
    { id: 1, portPic: portfolio, portVideo: cgtv2 },
    { id: 2, portPic: portfolio, portVideo: cgtv3 },
    { id: 3, portPic: portfolio, portVideo: cgtv4 },
  ],
  photo: [
    {
      imageSrc: photo,
      alt: "portrait",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat orci enim, nec dictum felis aliquam a. Nullam ullamcorper magna eu nisi tincidunt bibendum. Mauris in rutrum magna, volutpat vestibulum massa. Morbi augue nisi, ultricies sit amet erat a, efficitur molestie elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sem mauris, faucibus sed risus a, viverra viverra nisl. Ut sed scelerisque urna. Aenean ut neque nulla. Praesent imperdiet urna nec orci ultricies maximus ut sit amet tellus. Praesent vel hendrerit enim. Phasellus nulla urna, sagittis at blandit at, dignissim id elit. Suspendisse sed risus mauris.",
    },
    { imageSrc: photo, alt: "portrait" },
    { imageSrc: photo, alt: "portrait" },
    { imageSrc: photo, alt: "portrait" },
  ],
  companyWithVideo: [
    {
      imgSource: "",
      videoPreview: artIo,
      videoSource: artIo,
      header: "Martin Logan",
      description: "Worked on their motion series, avm...",
      btnName: "Watch",
    },
  ],
  companyWithImg: [
    {
      imgSource: MLImage,
      videoPreview: "",
      videoSource: cgtv2,
      header: "iiArcade",
      subHeader: "",
      description: "Reviewed an arcade...",
      btnName: "Watch",
    },
  ],
  services : [
    {
      title: 'Tier 1',
      description: 'Who is this service for, blah blah blah blah blah blah blah blah blah blah blah',
      details: [
        {item: 'story boarding'},
        {item: 'research'},
        {item: 'coffee'},
        {item: 'call of duty'},
        {item: 'building set pieces'},
        {item: 'little caesars'},
        {item: 'replying to socials'},
        {item: 'red bull'},
      ],
      preview: cgtv1,
      price: '$500'
    },
    {
      title: 'Tier 2',
      description: 'Who is this service for, blah blah blah blah blah blah blah blah blah blah blah',
      details: [
        {item: 'story boarding'},
        {item: 'research'},
        {item: 'coffee'},
        {item: 'call of duty'},
        {item: 'building set pieces'},
        {item: 'little caesars'},
        {item: 'replying to socials'},
        {item: 'red bull'},
      ],
      preview: cgtv1,
      price: '$2000'
    },
    {
      title: 'Tier 3',
      description: 'Who is this service for, blah blah blah blah blah blah blah blah blah blah blah',
      details: [
        {item: 'story boarding'},
        {item: 'research'},
        {item: 'coffee'},
        {item: 'call of duty'},
        {item: 'building set pieces'},
        {item: 'little caesars'},
        {item: 'replying to socials'},
        {item: 'red bull'},
      ],
      preview: cgtv1,
      price: '$5000'
    },
    {
      title: 'Tier 4',
      description: 'Who is this service for, blah blah blah blah blah blah blah blah blah blah blah',
      details: [
        {item: 'story boarding'},
        {item: 'research'},
        {item: 'coffee'},
        {item: 'call of duty'},
        {item: 'building set pieces'},
        {item: 'little caesars'},
        {item: 'replying to socials'},
        {item: 'red bull'},
      ],
      preview: cgtv1,
      price: '$8000'
    }
  ]
};
