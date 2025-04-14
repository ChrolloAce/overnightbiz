import { GoogleAuth } from 'google-auth-library';

interface BusinessProfile {
  name: string;
  primaryPhone?: string;
  websiteUri?: string;
  locationName?: string;
  address?: {
    addressLines: string[];
    locality: string;
    administrativeArea: string;
    postalCode: string;
    region: string;
  };
  storefrontAddress?: {
    addressLines: string[];
    locality: string;
    administrativeArea: string;
    postalCode: string;
    region: string;
  };
  serviceArea?: {
    businessType: string;
    places?: string[];
    radius?: {
      radiusKm: number;
    };
  };
  openInfo?: {
    openingDate?: {
      year: number;
      month: number;
      day: number;
    };
    openForBusiness?: boolean;
  };
  regularHours?: {
    periods: {
      openDay: string;
      openTime: string;
      closeDay: string;
      closeTime: string;
    }[];
  };
  specialHours?: {
    specialHourPeriods: {
      startDate: {
        year: number;
        month: number;
        day: number;
      };
      endDate: {
        year: number;
        month: number;
        day: number;
      };
      openTime: string;
      closeTime: string;
    }[];
  };
  serviceItems?: string[];
  metadata?: {
    hasGoogleUpdated: boolean;
    hasPendingEdits: boolean;
    canDelete: boolean;
    canOperateLocalPost: boolean;
    canOperateBusinessCall: boolean;
    canHaveFoodMenus: boolean;
    canOperateHealthData: boolean;
    canOperateLodgingData: boolean;
  };
  languageCode?: string;
  state?: {
    verificationState?: string;
    isDisabled?: boolean;
    isDisconnected?: boolean;
    isDuplicate?: boolean;
    isPendingReinstatement?: boolean;
    hasSystemRequiringReverification?: boolean;
    canHaveCompletePendingVerificationFlow?: boolean;
    canHavePartiallyCompletedVerificationFlow?: boolean;
    isEligibleForGraceUnverification?: boolean;
  };
}

export async function getBusinessProfiles(accessToken: string): Promise<BusinessProfile[]> {
  try {
    const response = await fetch('https://mybusinessbusinessinformation.googleapis.com/v1/accounts/~/locations', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching business profiles: ${response.statusText}`);
    }

    const data = await response.json();
    return data.locations || [];
  } catch (error) {
    console.error('Error fetching business profiles:', error);
    throw error;
  }
}

export async function getBusinessProfile(accessToken: string, name: string): Promise<BusinessProfile> {
  try {
    const response = await fetch(`https://mybusinessbusinessinformation.googleapis.com/v1/${name}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching business profile details: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching business profile details:', error);
    throw error;
  }
}

export async function updateBusinessProfile(
  accessToken: string,
  name: string,
  profileData: Partial<BusinessProfile>
): Promise<BusinessProfile> {
  try {
    const response = await fetch(`https://mybusinessbusinessinformation.googleapis.com/v1/${name}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error(`Error updating business profile: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating business profile:', error);
    throw error;
  }
} 