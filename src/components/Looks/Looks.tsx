import React, { useEffect, useState } from "react";
import * as S from "./Looks.styles";

interface LookItem {
  id: string;
  imgSrc: string;
  caption: string;
  production: string;
  year: string;
  span?: number;
}

const Looks: React.FC = () => {
  const [looks, setLooks] = useState<LookItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This is where you would fetch the data from Firebase
    // For now, I'll create a mock data array
    // Replace this with your Firebase fetch logic
    const fetchLooks = async () => {
      try {
        // Mock data - replace with your Firebase fetch
        const mockLooks: LookItem[] = [
          {
            id: "1",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2F210405115037-01-fletcher-street-concrete-cowboys-idris-elba.webp?alt=media&token=d3262a42-c0ff-440b-96c6-c918a4de826a",
            caption: "Idris Elba and Caleb McLaughlin",
            production: "Concrete Cowboy",
            year: "2020",
            span: 2,
          },
          {
            id: "2",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FConcrete-Cowboy-Seven.avif?alt=media&token=6946f40c-6d7c-4455-942c-abe1f121e4a2",
            caption: "Caleb McLaughlin and Jharrel Jerome",
            production: "Concrete Cowboy",
            year: "2020",
            span: 2,
          },
          {
            id: "3",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FGlass.jpeg?alt=media&token=f622e2e9-a1f3-44e3-b5b6-54f2f44cbdc8",
            caption: "James McAvoy, Bruce Willis, and Samuel L. Jackson",
            production: "Glass",
            year: "2019",
            span: 2,
          },
          {
            id: "4",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FLioness_1.jpeg?alt=media&token=7c24bf80-f15e-4c5a-931c-8c22f11551e1",
            caption: "Nicole Kidman",
            production: "Lioness",
            year: "2022",
            span: 2,
          },
          {
            id: "5",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FLioness_2.avif?alt=media&token=15dfb6e6-b7e9-4714-9908-73514e9f2f56",
            caption: "Nicole Kidman and Zoe Saldana",
            production: "Lioness",
            year: "2022",
            span: 2,
          },
          {
            id: "6",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FLioness_3.png?alt=media&token=882e85fc-c999-4db7-b01f-2ad9c854bb8b",
            caption: "Nicole Kidman",
            production: "Lioness",
            year: "2022",
            span: 2,
          },
          {
            id: "7",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FMCDCREE_EC023_H.webp?alt=media&token=a5bb9df2-0501-49cd-ae80-f97b5daffea1",
            caption: "Michael B. Jordan and Sylvester Stallone",
            production: "Creed",
            year: "2015",
            span: 2,
          },
          {
            id: "8",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FMovieGuru-VDN-011919.jpeg?alt=media&token=9d28e527-a425-4051-88ce-e04fca593446",
            caption: "Samuel L. Jackson",
            production: "Glass",
            year: "2019",
            span: 2,
          },
          {
            id: "9",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FScreenshot%202025-03-20%20at%2010.24.29%E2%80%AFAM.png?alt=media&token=07ce33f7-cec3-494c-a64c-079e986661da",
            caption: "Carla Gugino",
            production: "The Mighty Macs",
            year: "2009",
            span: 2,
          },
          {
            id: "10",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FScreenshot%202025-03-20%20at%209.52.13%E2%80%AFAM.png?alt=media&token=a31ce248-698c-4b59-9c52-adcffd2862cd",
            caption: "Carla Gugino",
            production: "The Mighty Macs",
            year: "2009",
            span: 2,
          },
          {
            id: "11",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FScreenshot%202025-03-21%20at%203.28.00%E2%80%AFPM.png?alt=media&token=72afbe06-56a9-4d76-a30d-78a2a62a1467",
            caption: "Carla Gugino and Ellen Burstyn",
            production: "The Mighty Macs",
            year: "2009",
            span: 2,
          },
          {
            id: "12",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2FScreenshot%202025-03-21%20at%203.28.34%E2%80%AFPM.png?alt=media&token=65759c8f-4bb3-4cff-b9c6-37bea2548d27",
            caption: "Cuba Gooding Jr. and Helen Mirren",
            production: "Shadowboxer",
            year: "2005",
            span: 2,
          },
          {
            id: "13",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2Fbest-supporting-actor-actress-robert-de-niro-jacki-weaver-silver-linings-playbook.jpg?alt=media&token=3502400c-2dfc-4fa1-9b95-810a920c8249",
            caption: "Robert De Niro and Jacki Weaver",
            production: "Silver Linings Playbook",
            year: "2012",
            span: 2,
          },
          {
            id: "14",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2Frev-1-C2_09807_RC_High_Res_JPEG.avif?alt=media&token=9e5cfe4c-ce2b-467d-8e44-2ca977a4dbeb",
            caption: "Michael B. Jordan",
            production: "Creed",
            year: "2015",
            span: 2,
          },
          {
            id: "15",
            imgSrc:
              "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/looks%2Frobert-de-niro-in-silver-linings-playbook.webp?alt=media&token=21ef7725-b921-4e60-86b2-825c29f306ca",
            caption: "Robert De Niro",
            production: "Silver Linings Playbook",
            year: "2012",
            span: 2,
          },
        ];

        setLooks(mockLooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching looks:", error);
        setLoading(false);
      }
    };

    fetchLooks();
  }, []);

  // Function to assign span values for a mosaic effect
  const assignSpans = (items: LookItem[]): LookItem[] => {
    return items.map((item, index) => {
      // Assign different spans to create visual interest
      // You can customize this logic based on your preferences
      if (index % 5 === 0) return { ...item, span: 2 };
      if (index % 7 === 0) return { ...item, span: 2 };
      return item;
    });
  };

  if (loading) {
    return (
      <S.Container>
        <S.Title>Looks</S.Title>
        <div>Loading...</div>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Looks</S.Title>
      <S.MosaicGrid>
        {looks.map((look) => (
          <S.LookItem key={look.id} span={look.span}>
            <S.ImageContainer>
              <img src={look.imgSrc} alt={look.caption} loading="lazy" />
            </S.ImageContainer>
            <S.Overlay>
              <S.Caption>{look.caption}</S.Caption>
              <S.SubCaption>
                {look.production} - {look.year}
              </S.SubCaption>
            </S.Overlay>
          </S.LookItem>
        ))}
      </S.MosaicGrid>
    </S.Container>
  );
};

export default Looks;
