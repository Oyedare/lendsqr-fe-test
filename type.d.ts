type SubLink =  {
    title: string;
    icon: ReactIcon;
    href: string;
}

type SideBarLinks = {  
    "id": number,
    "linkTitle": string,
    "subLink": SubLink[]
}

type UserDashboard = {
    "createdAt": string,
    "totalUsers": number,
    "activeUsers": number,
    "loanUsers": number,
    "savingUsers": number,
    "id": string
}

type Users = {
    "dateJoined": string,
    "userName": string,
    "email": string,
    "phoneNumber":string,
    "status":string,
    "organization":string,
    "bvn":string,
    "gender":string,
    "maritalStatus":string,
    "children":string,
    "residenceType":string,
    "educationLevel":string,
    "employmentStatus":string,
    "employmentSector":string,
    "employmentDuration":string,
    "officeEmail":string,
    "income":string,
    "loanRepayment":string,
    "twitter":string,
    "guarantorName":string,
    "guarantorNumber":string,
    "guarantorEmail":string,
    "guarantorRelationship":string,
    "userId": number,
    "accountNo": string,
    "id":string
}