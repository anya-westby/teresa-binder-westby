interface LookItem {
  id: string;
  imgSrc: string;
  caption: string;
  production: string;
  year: string;
  span?: number;
}

// You can later populate this from Firebase
export const looksData: LookItem[] = [
  // Your data will go here when fetched from Firebase
];

// Example Firebase fetching function (implement in your Looks.tsx component)
/*
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";

const fetchLooksFromFirebase = async () => {
  const storage = getStorage();
  const looksRef = ref(storage, 'looks/');
  const result = await listAll(looksRef);
  
  const looksPromises = result.items.map(async (itemRef) => {
    const url = await getDownloadURL(itemRef);
    const metadata = await getMetadata(itemRef);
    
    return {
      id: itemRef.name,
      imgSrc: url,
      caption: metadata.customMetadata?.caption || '',
      production: metadata.customMetadata?.production || '',
      year: metadata.customMetadata?.year || '',
      span: metadata.customMetadata?.span ? parseInt(metadata.customMetadata.span) : 1
    };
  });
  
  return Promise.all(looksPromises);
};
*/ 