export class User {
  docId = '';
  uid = '';
  lastName = '';
  firstName = '';
  email = '';
  password = '';
  phone = '';
  photoUrl = '';
  createdById = '';
  modifiedById = '';
  createdDate = 0;
  lastModified = 0;
  lastSeen = 0;
  isAdmin = false;
  isAnonymous = false;
  isGoogleUser = false;
  isFacebookUser = false;
  isAppleUser = false;
  isEmailConfirmed = false;

  public displayName(): string {
    if (this.firstName !== '' && this.lastName !== '') {
      return this.firstName + ', ' + this.lastName;
    }
    return this.lastName;
  }

  public initials(): string {
    if (this.firstName !== '' && this.lastName !== '') {
      return this.firstName.charAt(0).toUpperCase() + this.lastName.charAt(0).toUpperCase();
    }
    return 'KA';
  }
}

export const userConverter = {
  toFirestore: (user: User) => {
    return {
      docId: user.docId,
      uid: user.uid,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      photoUrl: user.photoUrl,
      createdById: user.createdById,
      modifiedById: user.modifiedById,
      createdDate: user.createdDate,
      lastModified: user.lastModified,
      lastSeen: user.lastSeen,
      isAdmin: user.isAdmin,
      isAnonymous: user.isAnonymous,
      isGoogleUser: user.isGoogleUser,
      isFacebookUser: user.isFacebookUser,
      isAppleUser: user.isAppleUser,
      isEmailConfirmed: user.isEmailConfirmed
    }
  },
  fromFirestore: (snapshot: any, options?: any) => {
    const data = snapshot.data(options);
    const user = new User();
    user.docId = data.docId;
    user.uid = data.uid;
    user.lastName = data.lastName;
    user.firstName = data.firstName;
    user.email = data.email;
    user.password = data.password;
    user.phone = data.phone;
    user.photoUrl = data.photoUrl;
    user.createdById = data.createdById;
    user.modifiedById = data.modifiedById;
    user.createdDate = data.createdDate;
    user.lastModified = data.lastModified;
    user.lastSeen = data.lastSeen;
    user.isAdmin = data.isAdmin;
    user.isAnonymous = data.isAnonymous;
    user.isGoogleUser = data.isGoogleUser;
    user.isFacebookUser = data.isFacebookUser;
    user.isAppleUser = data.isAppleUser;
    user.isEmailConfirmed = data.isEmailConfirmed;
    return user;
  }
}
