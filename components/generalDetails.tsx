import '@/styles/styledUserDetails.scss'

type UsersDataProp = {
    data: Users
}

type SubData = {
    subTitle: string,
    text: string
}

type InfoData = {
    title: string,
    sub: SubData[],
    id: number
}


const GeneralDetails = ({data}:UsersDataProp) => {
    
    const Info:InfoData[] = [
        {
            title: 'Personal Information',
            sub: [
                {
                    subTitle: 'Full Name',
                    text: data.userName
                },
                {
                    subTitle: 'Phone Number',
                    text: data.phoneNumber
                },
                {
                    subTitle: 'Email Address',
                    text: data.email
                },
                {
                    subTitle: 'Bvn',
                    text: data.bvn
                },
                {
                    subTitle: 'Marital status',
                    text: data.maritalStatus
                },
                {
                    subTitle: 'Children',
                    text: data.children === "0" ? 'None' : data.children
                },
                {
                    subTitle: 'Type of residence',
                    text: data.residenceType
                },
            ],
            id: 1
        },

        {
            title: 'Education and Employment',
            sub: [
                {
                    subTitle: 'Level Of Education',
                    text: data.educationLevel
                },
                {
                    subTitle: 'Employment Status',
                    text: data.employmentStatus
                },
                {
                    subTitle: 'Sector Of Employment',
                    text: data.employmentSector
                },
                {
                    subTitle: 'Duration of Employment',
                    text: data.employmentDuration + 'years'
                },
                {
                    subTitle: 'Office Email',
                    text: data.officeEmail
                },
                {
                    subTitle: 'Monthly income',
                    text: 'N'+data.income
                },
                {
                    subTitle: 'loan repayment',
                    text: data.loanRepayment
                },
            ],
            id: 2
        },
        {
            title: 'Socials',
            sub: [
                {
                    subTitle: 'Twitter',
                    text: '@'+data.twitter
                },
                {
                    subTitle: 'Facebook',
                    text: data.userName
                },
                {
                    subTitle: 'Instagram',
                    text: '@'+data.twitter
                },
            ],
            id: 3
        },
        {
            title: 'Guarantor',
            sub: [
                {
                    subTitle: 'Full Name',
                    text: data.guarantorName
                },
                {
                    subTitle: 'Phone Number',
                    text: data.guarantorNumber
                },
                {
                    subTitle: 'Email Address',
                    text: data.guarantorEmail
                },
                {
                    subTitle: 'Relationship',
                    text: data.guarantorRelationship
                },
            ],
            id: 4
        }
    ]
  return (
    <>  
        {Info.map((item)=>(
            <div key={item.id} className="info">
                <h3>{item.title}</h3>
                <div className="grid-container">
                    {item.sub.map((index,i)=>(
                        <div key={i} className="grid-container-item">
                            <h5>{index.subTitle}</h5>
                            <p>{index.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </>
  )
}

export default GeneralDetails