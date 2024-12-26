// ... previous interfaces ...

export interface Investigation {
  id: string;
  title: string;
  summary: string;
  type: 'phishing' | 'ransomware' | 'ddos' | 'other';
  date: string;
  author: string;
  content: string;
  infographic?: string;
  tags?: string[];
}

// ... rest of the file remains unchanged ...