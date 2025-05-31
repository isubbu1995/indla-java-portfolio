
import { useState } from "react";
import { Upload, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImageChange?: (imageUrl: string) => void;
  currentImage?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const ImageUpload = ({ onImageChange, currentImage, size = "lg" }: ImageUploadProps) => {
  const [imageUrl, setImageUrl] = useState<string>(currentImage || "");
  const [isUploading, setIsUploading] = useState(false);

  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24", 
    lg: "h-32 w-32",
    xl: "h-40 w-40"
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Create a URL for the uploaded image
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    onImageChange?.(url);
    
    setIsUploading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative group">
        <Avatar className={`${sizeClasses[size]} border-4 border-indigo-500/50 hover:border-indigo-400 transition-colors`}>
          <AvatarImage 
            src={imageUrl} 
            alt="Profile" 
            className="object-cover"
          />
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xl">
            <User className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
        
        {/* Upload overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Upload className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isUploading}
        />
        <Button 
          variant="outline" 
          size="sm"
          className="bg-gray-800 border-indigo-500/50 text-indigo-400 hover:bg-indigo-900/50 hover:border-indigo-400"
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : imageUrl ? "Change Photo" : "Upload Photo"}
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
