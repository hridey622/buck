import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';

const GardenComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Garden</h1>
      <Link to="/startup-application">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Post
        </Button>
      </Link>
      {/* Other content */}
    </div>
  );
};

export default GardenComponent; 