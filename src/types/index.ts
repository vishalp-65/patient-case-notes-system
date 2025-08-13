// Core domain types
export interface User {
  id: string;
  email: string;
  name: string;
  nhsId: string;
  role: 'doctor' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Patient {
  id: string;
  nhsNumber: string;
  name: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CaseNote {
  id: string;
  patientId: string;
  doctorId: string;
  content: string;
  type: 'manual' | 'scanned';
  originalFileUrl?: string;
  transcriptionStatus: 'pending' | 'completed' | 'failed';
  confidenceScore?: number;
  requiresReview: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FileUpload {
  id: string;
  doctorId: string;
  patientId: string;
  originalFilename: string;
  s3Key: string;
  fileSize: number;
  mimeType: string;
  uploadStatus: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}

// API Response types
export interface APIResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface APIError {
  code: string;
  message: string;
  details?: unknown;
  timestamp: string;
  requestId: string;
}
