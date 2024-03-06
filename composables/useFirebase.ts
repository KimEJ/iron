import { initializeApp, getApps } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';

export const useFirebaseApp = (): FirebaseApp => {
  const config = useRuntimeConfig();
  let app: FirebaseApp;
  if (!getApps().length) {
    app = initializeApp({
      apiKey: config.public.fbApiKey as string,
      appId: config.public.fbAppId as string,
      authDomain: config.public.fbAuthDomain as string,
      databaseURL: config.public.fbDatabaseUrl as string,
      measurementId: config.public.fbMeasurementId as string,
      messagingSenderId: config.public.fbMessagingSenderId as string,
      projectId: config.public.fbProjectId as string,
      storageBucket: config.public.fbStorageBucket as string,
    });
  } else {
    app = getApps()[0];
  }
  return app;
};