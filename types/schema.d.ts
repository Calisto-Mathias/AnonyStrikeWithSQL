// Employee Table
interface Employee {
    id: number; // Primary Key, Auto Increment
    email: string; // Unique, Not Null
    public_key: string; // Not Null
    department_id: number; // Foreign Key, Not Null
    role_id: number; // Foreign Key, Not Null
    password_hash: string; // Not Null
    approved_status: 'pending' | 'approved' | 'rejected'; // Not Null
}

// Role Table
interface Role {
    id: number; // Primary Key, Auto Increment
    name: string; // Unique, Not Null
}

// Department Table
interface Department {
    id: number; // Primary Key, Auto Increment
    name: string; // Not Null
}

// Complaint Table
interface Complaint {
    id: number; // Primary Key, Auto Increment
    content: string; // Not Null
    timestamp: Date; // Not Null
    status: 'pending' | 'resolved'; // Not Null
    ring_signature: string; // Not Null
    department_id: number; // Foreign Key, Not Null
    commitment_scheme: string; // Not Null
    category_id: number; // Foreign Key, Not Null
    current_commenting_role_id: number; // Foreign Key, Not Null
}

// Comment Table
interface Comment {
    id: number; // Primary Key, Auto Increment
    content: string; // Not Null
    timestamp: Date; // Not Null
    audit_log_id: number; // Foreign Key, Not Null
    employee_id: number; // Foreign Key, Not Null
    digital_signature: string; // Not Null
}

// Category Table
interface Category {
    id: number; // Primary Key, Auto Increment
    name: string; // Not Null
}

// Resolution Table
interface Resolution {
    id: number; // Primary Key, Auto Increment
    complaint_id: number; // Foreign Key, Not Null
    resolution_text: string; // Not Null
    timestamp: Date; // Not Null
    commitment_revealed_id: number; // Foreign Key, Not Null
}

// AuditLog Table
interface AuditLog {
    id: number; // Primary Key, Auto Increment
    action: string; // Not Null
    timestamp: Date; // Not Null
    complaint_id: number; // Foreign Key, Not Null
}

// CommitmentRevealed Table
interface CommitmentRevealed {
    id: number; // Primary Key, Auto Increment
    hash: string; // Unique, Not Null
    revealed_data: string; // Not Null
    timestamp: Date; // Not Null
    complainant_id: number; // Foreign Key, Not Null
    subject_id: number; // Foreign Key, Not Null
}