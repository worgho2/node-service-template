import AwsPushNotificationFacade from './lib/infrastructure/aws/aws-push-notification-facade'
import AwsSesFacade from './lib/infrastructure/aws/aws-ses-facade'
import AwsStorageFacade from './lib/infrastructure/aws/aws-storage-facade'

import FirebaseAdminFacade from './lib/infrastructure/firebase/firebase-admin-facade'

AwsPushNotificationFacade.setup()
AwsSesFacade.setup()
AwsStorageFacade.setup()

FirebaseAdminFacade.setup()

import './bin/www'
