'use client';

import { useState } from 'react';
import { Download, FileText, Loader, Award, Users, Target } from 'lucide-react';

interface PDFGeneratorProps {
  onDownloadStart?: () => void;
  onDownloadComplete?: () => void;
}

const PDFGenerator = ({ onDownloadStart, onDownloadComplete }: PDFGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const generateProfessionalResumePDF = async () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    setProgress(0);
    onDownloadStart?.();

    try {
      // Dynamic import to reduce initial bundle size
      const [html2canvas, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf')
      ]);

      setProgress(10);

      // Create PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      
      let currentY = margin;

      // Store page count manually
      let totalPages = 1;

      // Function to add new page if needed
      const checkNewPage = (spaceNeeded: number) => {
        if (currentY + spaceNeeded > pageHeight - margin) {
          pdf.addPage();
          currentY = margin;
          totalPages += 1;
          return true;
        }
        return false;
      };

      // Function to add section
      const addSection = (title: string, content: any) => {
        checkNewPage(20);
        pdf.setFontSize(16);
        pdf.setTextColor(10, 36, 99); // Navy blue
        pdf.setFont('helvetica', 'bold');
        pdf.text(title, margin, currentY);
        currentY += 10;
        
        pdf.setDrawColor(212, 175, 55); // Gold
        pdf.setLineWidth(0.5);
        pdf.line(margin, currentY - 2, margin + 50, currentY - 2);
        currentY += 10;
        
        content();
      };

      // Function to add text with formatting
      const addText = (text: string, x: number, y: number, options: any = {}) => {
        const { size = 11, color = [0, 0, 0], bold = false, align = 'left' } = options;
        pdf.setFontSize(size);
        pdf.setTextColor(color[0], color[1], color[2]);
        pdf.setFont('helvetica', bold ? 'bold' : 'normal');
        pdf.text(text, x, y, { align });
      };

      setProgress(20);

      // PAGE 1: Header and Contact Information
      // Header
      pdf.setFillColor(10, 36, 99); // Navy blue
      pdf.rect(0, 0, pageWidth, 60, 'F');
      
      pdf.setFontSize(28);
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.text('JOHN SMITH', pageWidth / 2, 25, { align: 'center' });
      
      pdf.setFontSize(16);
      pdf.setTextColor(212, 175, 55); // Gold
      pdf.text('Senior F&B Trainer - Cruise Ship Hospitality', pageWidth / 2, 35, { align: 'center' });
      
      currentY = 70;

      // Contact Information
      addSection('CONTACT INFORMATION', () => {
        const contactInfo = [
          { label: 'Email', value: 'john.smith@maritimeprofessional.com' },
          { label: 'Phone', value: '+1 (555) 123-4567' },
          { label: 'Location', value: 'Miami, Florida, USA' },
          { label: 'LinkedIn', value: 'linkedin.com/in/johnsmith-fbtrainer' }
        ];
        
        const col1X = margin;
        const col2X = margin + 100;
        
        contactInfo.forEach((info, index) => {
          const y = currentY + (index * 8);
          addText(`${info.label}:`, col1X, y, { size: 11, color: [10, 36, 99], bold: true });
          addText(info.value, col1X + 25, y, { size: 11 });
        });
        
        currentY += 40;
      });

      setProgress(30);

      // Professional Summary
      addSection('PROFESSIONAL SUMMARY', () => {
        const summary = `Seasoned Seaman and Food & Beverage Trainer with 8+ years of experience in luxury cruise ship hospitality. Specialized in fine dining service training, staff development, and operational excellence across major international cruise lines. Proven track record of improving service ratings and reducing staff turnover through effective training programs.`;
        
        const lines = pdf.splitTextToSize(summary, contentWidth - 10);
        addText(lines, margin, currentY, { size: 11 });
        currentY += (lines.length * 6) + 10;
      });

      setProgress(40);

      // Professional Experience
      addSection('PROFESSIONAL EXPERIENCE', () => {
        const experiences = [
          {
            title: 'Senior F&B Trainer',
            company: 'Royal Caribbean International',
            period: '2020 - Present',
            achievements: [
              'Lead trainer for fine dining service teams across fleet',
              'Developed training programs for 200+ staff members',
              'Improved service ratings by 30% across 5 ships',
              'Reduced staff turnover by 25% through improved training'
            ]
          },
          {
            title: 'F&B Training Specialist',
            company: 'Norwegian Cruise Line',
            period: '2017 - 2020',
            achievements: [
              'Specialized in luxury dining service training',
              'Trained 150+ staff in fine dining protocols',
              'Developed customized training for Asian market',
              'Achieved 95% guest satisfaction in dining'
            ]
          },
          {
            title: 'Assistant F&B Manager',
            company: 'Princess Cruises',
            period: '2015 - 2017',
            achievements: [
              'Managed daily dining operations',
              'Managed team of 50+ dining staff',
              'Implemented cost-saving measures saving $100K annually'
            ]
          }
        ];

        experiences.forEach((exp, expIndex) => {
          checkNewPage(40);
          
          // Title and period
          addText(exp.title, margin, currentY, { size: 14, color: [10, 36, 99], bold: true });
          addText(exp.period, pageWidth - margin, currentY, { size: 11, color: [100, 100, 100], align: 'right' });
          currentY += 7;
          
          // Company
          addText(exp.company, margin, currentY, { size: 12, color: [0, 0, 0], bold: true });
          currentY += 8;
          
          // Achievements
          exp.achievements.forEach((achievement, achIndex) => {
            const bulletY = currentY + (achIndex * 6);
            pdf.circle(margin + 3, bulletY - 2, 1, 'F');
            addText(achievement, margin + 8, bulletY, { size: 10 });
          });
          
          currentY += (exp.achievements.length * 6) + 15;
          
          // Add separator if not last
          if (expIndex < experiences.length - 1) {
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.2);
            pdf.line(margin, currentY - 5, pageWidth - margin, currentY - 5);
          }
        });
      });

      setProgress(60);

      // Check for new page before next section
      checkNewPage(50);

      // PAGE 2: Training Programs and Certifications
      // Training Programs
      addSection('TRAINING PROGRAMS DEVELOPED', () => {
        const programs = [
          { name: 'Fine Dining Service Excellence', duration: '4 weeks', level: 'Advanced Level' },
          { name: 'Cruise Ship F&B Operations', duration: '6 weeks', level: 'Intermediate Level' },
          { name: 'Hospitality Leadership Development', duration: '8 weeks', level: 'Advanced Level' },
          { name: 'Wine Service & Pairing Certification', duration: '2 weeks', level: 'Expert Level' },
          { name: 'Bar & Beverage Management', duration: '4 weeks', level: 'Intermediate Level' },
          { name: 'Guest Service Excellence', duration: '2 weeks', level: 'All Levels' }
        ];

        const colWidth = contentWidth / 2;
        
        programs.forEach((program, index) => {
          const row = Math.floor(index / 2);
          const col = index % 2;
          const x = margin + (col * colWidth);
          const y = currentY + (row * 25);
          
          // Program box
          pdf.setDrawColor(230, 243, 255); // Sea blue
          pdf.setFillColor(230, 243, 255);
          pdf.roundedRect(x, y, colWidth - 10, 20, 3, 3, 'FD');
          
          // Program name
          addText(program.name, x + 5, y + 7, { size: 10, color: [10, 36, 99], bold: true });
          
          // Duration and level
          addText(`${program.duration} • ${program.level}`, x + 5, y + 14, { size: 9, color: [100, 100, 100] });
        });
        
        currentY += (Math.ceil(programs.length / 2) * 25) + 10;
      });

      setProgress(80);

      // Certifications
      addSection('CERTIFICATIONS', () => {
        const certifications = [
          { name: 'Certified Hospitality Trainer (CHT)', issuer: 'American Hotel & Lodging Association', year: '2022' },
          { name: 'Wine & Spirits Education Trust Level 3', issuer: 'WSET Global', year: '2021' },
          { name: 'Food Safety Manager Certification', issuer: 'National Restaurant Association', year: '2020' },
          { name: 'Cruise Ship Hospitality Management', issuer: 'Florida Cruise Association', year: '2019' },
          { name: 'Advanced Service Techniques', issuer: 'International Cruise Council', year: '2023' },
          { name: 'Multicultural Team Leadership', issuer: 'Global Hospitality Institute', year: '2022' }
        ];

        certifications.forEach((cert, index) => {
          const y = currentY + (index * 15);
          
          // Certification name
          addText(cert.name, margin, y, { size: 11, color: [10, 36, 99], bold: true });
          
          // Issuer and year
          addText(`${cert.issuer} • ${cert.year}`, margin, y + 5, { size: 10, color: [100, 100, 100] });
          
          // Bullet point
          pdf.setFillColor(212, 175, 55); // Gold
          pdf.circle(margin - 4, y - 1, 1.5, 'F');
        });
        
        currentY += (certifications.length * 15) + 10;
      });

      setProgress(90);

      // Skills Section
      addSection('PROFESSIONAL SKILLS', () => {
        const skills = [
          'Fine Dining Service Training',
          'Wine & Beverage Knowledge',
          'Staff Development & Coaching',
          'Cruise Ship Operations',
          'Leadership & Mentoring',
          'Cost Control & Budgeting',
          'Menu Planning & Development',
          'Guest Experience Management',
          'Multicultural Team Training',
          'Safety & Sanitation Standards'
        ];

        const colWidth = contentWidth / 2;
        
        skills.forEach((skill, index) => {
          const row = Math.floor(index / 2);
          const col = index % 2;
          const x = margin + (col * colWidth);
          const y = currentY + (row * 8);
          
          pdf.setFillColor(212, 175, 55); // Gold
          pdf.circle(x, y - 2, 1, 'F');
          addText(skill, x + 4, y, { size: 10 });
        });
        
        currentY += (Math.ceil(skills.length / 2) * 8) + 10;
      });

      // Footer on all pages
      // FIXED: Use manual page count instead of getNumberOfPages()
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        
        // Page number
        pdf.setFontSize(9);
        pdf.setTextColor(150, 150, 150);
        pdf.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
        
        // Confidential footer
        pdf.setFontSize(8);
        pdf.setTextColor(100, 100, 100);
        pdf.text('Confidential - Professional Resume • Generated from Maritime Professional Portfolio', pageWidth / 2, pageHeight - 5, { align: 'center' });
      }

      setProgress(100);

      // Download PDF
      pdf.save('John_Smith_Seaman_FB_Trainer_Resume.pdf');
      
      setIsGenerating(false);
      onDownloadComplete?.();

      // Show success message
      setTimeout(() => {
        alert('Professional Resume PDF downloaded successfully!');
      }, 500);

    } catch (error) {
      console.error('PDF generation error:', error);
      setIsGenerating(false);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h4 className="text-xl font-bold text-navy-900 mb-3 flex items-center">
          <Target className="w-5 h-5 text-gold-600 mr-3" />
          Professional Resume PDF
        </h4>
        <p className="text-gray-600 text-sm mb-4">
          Generate a multi-page professional resume PDF with proper formatting.
        </p>
      </div>

      <button
        onClick={generateProfessionalResumePDF}
        disabled={isGenerating}
        className="w-full bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 text-white font-medium py-4 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Loader className="w-5 h-5 mr-3 animate-spin" />
            Generating PDF... {progress}%
          </>
        ) : (
          <>
            <Download className="w-5 h-5 mr-3" />
            Generate Professional Resume PDF
          </>
        )}
      </button>

      {isGenerating && (
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Creating document...</span>
            <span>{progress}% complete</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFGenerator;