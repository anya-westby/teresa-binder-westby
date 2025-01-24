interface GalleryItem {
  imgSrc: string;
  title: string;
  role: string;
  year: string;
  rolePriority?: number;
}

interface GalleryData {
  film: GalleryItem[];
  series: GalleryItem[];
  ads: GalleryItem[];
}

const ROLE_PRIORITIES = {
  COSTUME_DESIGNER: 1,
  ASSISTANT_COSTUME_DESIGNER: 2,
  PERSONAL_COSTUMER: 3,
  OTHER: 4
} as const;

export const galleryData: GalleryData = {
  film: [
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FApollo%2011.jpg?alt=media&token=75beae46-715d-4bda-bebe-7d2509ff594e",
      title: "Apollo 11",
      role: "Wardrobe Supervisor [as Teresa Binder]",
      year: "1996",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FBeloved.jpeg?alt=media&token=d03866c1-e67d-4e2a-b5bf-be1190391849",
      title: "Beloved",
      role: "Costumer",
      year: "1998",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FBlade.jpeg?alt=media&token=6aa88570-6cb7-4c38-9683-e8e6424670fd",
      title: "Blade",
      role: "Costumer [as Teresa Binder]",
      year: "1998",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FConcrete%20Cowboy.jpg?alt=media&token=9efe815b-f4c9-405a-b439-cb4bb01aded8",
      title: "Concrete Cowboy",
      role: "Costume Designer",
      year: "2020",
      rolePriority: 1
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FCreed.jpg?alt=media&token=e1bec33e-f730-400f-bf6d-17f884df2c1c",
      title: "Creed",
      role: "Assistant Costume Designer",
      year: "2015",
      rolePriority: 2
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FDead%20Man%20Down.jpg?alt=media&token=3df75055-46fc-4d4f-a921-efdbc5bd4fc7",
      title: "Dead Man Down",
      role: "Key Costumer [as Teresa Binder]",
      year: "2013",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FEquity.jpg?alt=media&token=793f2426-d4c9-4c7f-a4ba-5c309a74c29f",
      title: "Equity",
      role: "Costume Designer [as Teresa Binder]",
      year: "2016",
      rolePriority: 1
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FGlass.jpg?alt=media&token=87bd7e9f-26fd-49c7-9992-c46400461606",
      title: "Glass",
      role: "Assistant Costume Designer",
      year: "2019",
      rolePriority: 2
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FHow%20do%20you%20Know.jpeg?alt=media&token=932f9692-8836-4165-9712-716b62a56531",
      title: "How Do You Know",
      role: "Personal Costumer, Reese Witherspoon",
      year: "2010",
      rolePriority: 3
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FJersey%20Girl.jpg?alt=media&token=fe6811ce-1c9b-42de-8732-a064924a99e7",
      title: "Jersey Girl",
      role: "Key Costumer",
      year: "2004",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FLawAbidingCitzen.jpg?alt=media&token=29388eb3-8b42-4fd0-9721-2910306ca6db",
      title: "Law Abiding Citizen",
      role: "Costumer",
      year: "2009",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FLimitless.jpg?alt=media&token=f4b97d16-73bd-474b-926a-826277eb78b5",
      title: "Limitless",
      role: "Personal Costumer, Robert De Niro",
      year: "2011",
      rolePriority: 3
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FMighty%20Macs.jpg?alt=media&token=e8a155f5-1e67-47dc-b0e8-ca60e99cd867",
      title: "The Mighty Macs",
      role: "Costume Designer",
      year: "2009",
      rolePriority: 1
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FMoney%20Train.jpg?alt=media&token=569743e6-737b-4870-b160-48b64d99849d",
      title: "Money Train",
      role: "Costumer",
      year: "1995",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FNational%20Treasure.jpg?alt=media&token=398054a3-73c4-4597-901c-a12386f6fe08",
      title: "National Treasure",
      role: "Set Costumer [as Teresa Binder]",
      year: "2004",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FShadowboxer.jpg?alt=media&token=289a9266-d1fc-444e-876a-70462d42615e",
      title: "Shadowboxer",
      role: "Costume Designer",
      year: "2005",
      rolePriority: 1
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FSigns.jpg?alt=media&token=6eef4435-4cb7-4388-8e50-5e66d088122a",
      title: "Signs",
      role: "Key Costumer",
      year: "2002",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FSilver%20Linings%20Playbook.jpg?alt=media&token=419d97a9-38c9-4e26-85ec-83dd262f2769",
      title: "Silver Linings Playbook",
      role: "Assistant Costume Designer",
      year: "2012",
      rolePriority: 2
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FSixth%20Sense.jpg?alt=media&token=362b1e29-085f-4e79-a7c2-857f0415e823",
      title: "The Sixth Sense",
      role: "Personal Costumer, Bruce Willis [as Teresa Binder]",
      year: "1999",
      rolePriority: 3

    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FSplit.jpg?alt=media&token=8a4964fc-48eb-47e3-a51c-99c449d7c3f7",
      title: "Split",
      role: "Assistant Costume Designer [as Teresa Binder]",
      year: "2016",
      rolePriority: 2
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FTenure.jpg?alt=media&token=c3c6e1f4-1ab5-4395-a750-a57504ffb82a",
      title: "Tenure",
      role: "Costume Designer",
      year: "2008",
      rolePriority: 1
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Benefactor.jpg?alt=media&token=74cd8ad7-627d-44e3-9aaf-474e0d51d81e",
      title: "The Benefactor",
      role: "Personal Costumer, Richard Gere",
      year: "2015",
      rolePriority: 3
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Chamber.jpg?alt=media&token=851be855-523c-4f3d-9adf-d347dd50622a",
      title: "The Chamber",
      role: "Set Costumer [as Teresa Binder]",
      year: "1996",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Great%20White%20Hype.jpeg?alt=media&token=08829af9-07ab-4a6c-b897-fdaebfd599bd",
      title: "The Great White Hype",
      role: "Womens Key Set Costumer [as Teresa Binder]",
      year: "1996",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Lovely%20Bones.jpg?alt=media&token=ef779c78-d563-4921-8a31-88bdca351136",
      title: "The Lovely Bones",
      role: "Costume Coordinator",
      year: "2009",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Visit.jpg?alt=media&token=84953da1-aadd-4b09-a9a6-32b573960343",
      title: "The Visit",
      role: "Key Costumer",
      year: "2015",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Wedding%20Singer.jpg?alt=media&token=6c52045b-cc6c-4edd-ace6-b520783b323f",
      title: "The Wedding Singer",
      role: "Costumer",
      year: "1998",
      rolePriority: 4
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Woodsman.jpg?alt=media&token=49cbfe2d-692c-4114-92fa-36345fa87f8a",
      title: "The Woodsman",
      role: "Costume Supervisor: Philadelphia",
      year: "2004",
      rolePriority: 4

    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FTransformers.jpg?alt=media&token=8a246943-d18d-4127-82ba-c8ac8779948b",
      title: "Transformers: Revenge of the Fallen",
      role: "Costumer [as Teresa Binder]",
      year: "2009",
      rolePriority: 4

    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FUnbreakable.jpg?alt=media&token=d05d021a-9d2b-43b3-93a3-a5982f590375",
      title: "Unbreakable",
      role: "Personal Costumer, Bruce Willis [as Teresa Binder]",
      year: "2000",
      rolePriority: 3
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FCreed%20II.jpeg?alt=media&token=702a01a7-cd81-4f16-8e34-03525b963f61',
      title: 'Creed II',
      role: 'Assistant Costume Designer',
      year: '2018',
      rolePriority: 2
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FPlay%20It%20To%20The%20Bone.jpg?alt=media&token=3652fd7c-f907-455f-912d-302872948045',
      title: 'Play It to the Bone',
      role: 'Personal Costumer, Woody Harrelson',
      year: '1999',
      rolePriority: 3
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FRocky%20Balboa.png?alt=media&token=d3010335-0f73-42a2-a5c1-ccb5752d1df7',
      title: 'Rocky Balboa',
      role: 'Personal Costumer, Sylvester Stallone',
      year: '2006',
      rolePriority: 3
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FLord%20of%20Illusions.jpeg?alt=media&token=8bc4becc-1199-42ad-816c-3e947446d0b9',
      title: 'Lord of Illusions',
      role: 'Set Costumer',
      year: '1995',
      rolePriority: 4
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FThe%20Fantasticks.jpeg?alt=media&token=75058939-afdd-47f9-a734-b2b16b613cb6',
      title: 'The Fantasticks',
      role: 'Set Costumer',
      year: '1995',
      rolePriority: 4
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FLady%20In%20The%20Water.jpg?alt=media&token=eeecf6ec-dd5e-4518-8fe3-a71b74a9a683',
      title: 'Lady in the Water',
      role: 'Shopper',
      year: '2006',
      rolePriority: 4

    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/film%2FLike%20Mike.jpg?alt=media&token=f66d6d94-b93d-4754-bbbb-03537ec51b84',
      title: 'Like Mike',
      role: 'Costumer',
      year: '2002',
      rolePriority: 4

    }
  ],
  series: [
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FLioness.jpg?alt=media&token=6159b434-b5d4-46a6-bfe4-bc6d78f0bab7",
      title: "Lioness",
      role: "Costume Designer",
      year: "2022-2023",
      rolePriority: 1
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FServant.jpeg?alt=media&token=2aa8928a-f62e-45fb-ac0c-c4754e05d057",
      title: "Servant",
      role: "Assistant Costume Designer",
      year: "2019-2021",
      rolePriority: 2
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FLioness%20Season%202.jpg?alt=media&token=69c07fcc-57e4-48fb-989e-1dc5341a739d',
      title: 'Lioness Season 2',
      role: 'Costume Designer',
      year: '2023-2024',
      rolePriority: 1
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FBel%20Air.jpg?alt=media&token=864f56b0-010a-4a2e-8bdf-c0f5550f04fd',
      title: 'Bel-Air',
      role: 'Assistant Costume Designer: Philadelphia',
      year: '2022',
      rolePriority: 2
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FIs%20Always%20Sunny.png?alt=media&token=57367b3e-b231-4b66-b59a-7cba6854a86a',
      title: 'It\'s Always Sunny in Philadelphia',
      role: 'Key Costumer: Philadelphia',
      year: '2005-2015',
      rolePriority: 3
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FDownward%20dog.jpeg?alt=media&token=cba132a4-ea43-400c-8b78-bd274f89bb45',
      title: 'Downward Dog',
      role: 'Assistant Costume Designer',
      year: '2017',
      rolePriority: 2
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FCold%20Case.jpg?alt=media&token=4e1c7618-8a81-47f4-8d95-ddc80bad9a5f',
      title: 'Cold Case',
      role: 'Key Costumer: Philadelphia',
      year: '2003-2010',
      rolePriority: 3
    },
    {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/series%2FMare%20of%20Easttown.jpg?alt=media&token=8926a010-f841-4109-83cd-e3d4dad574e4',
      title: 'Mare of Easttown',
      role: 'Shopper',
      year: '2021',
      rolePriority: 3
    }
  ],
  ads: [
    {
      imgSrc: "https://www.youtube.com/embed/UAiFKN1dyj8?si=Pxv9KuUALz42rH1I",
      title: "Designed with ♡: In-Home WiFi",
      role: "Comcast",
      year: "2024",
    },
    {
      imgSrc: "https://www.youtube.com/embed/-FbUXkJlFVI?si=F2OTvC4HvKkVvW3I",
      title: "Chunky 'Bragging Rights'",
      role: "Campbells Chunky",
      year: "2023",
    },
    {
      imgSrc: 'https://www.youtube.com/embed/ATynH1CyUrU?si=GXfA4MZHM__NXtlx',
      title: 'Are you stuck in the Past?',
      role: 'GIANT',
      year: '2023'
    },
    {
      imgSrc: "https://www.youtube.com/embed/zPNqMV3OGKk?si=-2_cvSTXnia-cQeW",
      title: "Caesar's Atlantic City",
      role: "Caesars Atlantic City Hotel & Casino",
      year: "2023",
    },
    {
      imgSrc: "https://www.youtube.com/embed/Ks7pkVjx-04?si=cPl1uVM22bKUPcFn",
      title: "The Official Chip of the NFL",
      role: "Tostitos",
      year: "2018",
    },
    {
      imgSrc: "https://www.youtube.com/embed/5U3VcB0_Rws?si=hVFN88gacYYEqiGh",
      title: "Since 1776",
      role: "Philadelphia 76ers",
      year: "2015",
    },

  ],
};
