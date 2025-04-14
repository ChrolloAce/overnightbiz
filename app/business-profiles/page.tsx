'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface BusinessProfile {
  name: string;
  locationName?: string;
  primaryPhone?: string;
  websiteUri?: string;
  address?: {
    addressLines: string[];
    locality: string;
    administrativeArea: string;
    postalCode: string;
    region: string;
  };
  state?: {
    verificationState?: string;
    isDisabled?: boolean;
  };
}

// Mock business profiles data
const mockProfiles: BusinessProfile[] = [
  {
    name: "accounts/123456789/locations/1",
    locationName: "AMERICAN GLOBAL CONSTRUCTION LLC",
    primaryPhone: "+1 (305) 555-1234",
    websiteUri: "https://example.com/construction",
    address: {
      addressLines: ["5201 waterford drive"],
      locality: "Miami",
      administrativeArea: "FL",
      postalCode: "33126",
      region: "United States"
    },
    state: {
      verificationState: "VERIFIED",
      isDisabled: false
    }
  },
  {
    name: "accounts/123456789/locations/2",
    locationName: "Best Quality Concrete Corp",
    primaryPhone: "+1 (954) 555-6789",
    websiteUri: "https://example.com/concrete",
    address: {
      addressLines: ["123 Main Street"],
      locality: "Hollywood",
      administrativeArea: "FL",
      postalCode: "33021",
      region: "United States"
    },
    state: {
      verificationState: "VERIFIED",
      isDisabled: false
    }
  },
  {
    name: "accounts/123456789/locations/3",
    locationName: "Costello event productions",
    primaryPhone: "+1 (317) 555-9876",
    websiteUri: "https://example.com/events",
    address: {
      addressLines: ["456 Production Ave"],
      locality: "Indianapolis",
      administrativeArea: "IN",
      postalCode: "46204",
      region: "United States"
    },
    state: {
      verificationState: "VERIFIED",
      isDisabled: false
    }
  },
  {
    name: "accounts/123456789/locations/4",
    locationName: "Creative Custom Carpentry of SWFL",
    primaryPhone: "+1 (239) 555-4321",
    websiteUri: "https://example.com/carpentry",
    address: {
      addressLines: ["789 Craft Street"],
      locality: "Fort Myers",
      administrativeArea: "FL",
      postalCode: "33901",
      region: "United States"
    },
    state: {
      verificationState: "VERIFIED",
      isDisabled: false
    }
  }
];

export default function BusinessProfilesPage() {
  const [profiles] = useState<BusinessProfile[]>(mockProfiles);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 min-h-screen">
        <Header />
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Business Profiles</h1>
            <p className="text-gray-500">Manage your Google Business Profiles</p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {profiles.length > 0 ? (
                    profiles.map((profile) => (
                      <tr key={profile.name}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{profile.locationName}</div>
                          {profile.websiteUri && (
                            <div className="text-sm text-gray-500">
                              <a href={profile.websiteUri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {profile.websiteUri}
                              </a>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {profile.address ? (
                              <>
                                {profile.address.addressLines.join(', ')}<br />
                                {profile.address.locality}, {profile.address.administrativeArea} {profile.address.postalCode}
                              </>
                            ) : (
                              'N/A'
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{profile.primaryPhone || 'N/A'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${profile.state?.isDisabled 
                              ? 'bg-red-100 text-red-800' 
                              : profile.state?.verificationState === 'VERIFIED' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'}`}>
                            {profile.state?.isDisabled 
                              ? 'Disabled' 
                              : profile.state?.verificationState === 'VERIFIED' 
                                ? 'Verified' 
                                : 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href={`/business-profiles/${encodeURIComponent(profile.name)}`} className="text-primary hover:text-indigo-900 mr-4">
                            View
                          </a>
                          <a href={`/business-profiles/${encodeURIComponent(profile.name)}/edit`} className="text-primary hover:text-indigo-900">
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        No business profiles found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 