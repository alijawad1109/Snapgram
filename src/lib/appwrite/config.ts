import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '655464f4d78994e26892',
  databaseId:'6554657e3e1175943899',
  storageId: '6554653364bd696cb288',
  userCollectionId:'655465af08d1c710384c',
  postCollectionId: '6554658fdfda23e52311',
  savesCollectionId: '655465a429b949010419',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
