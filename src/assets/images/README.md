# Images Directory

This directory is for storing your portfolio images.

## Profile Photo
- Place your profile photo here and name it `profile.jpg` or `profile.png`
- Recommended size: 400x400 pixels or larger (square aspect ratio)
- Supported formats: JPG, PNG, WebP

## Project Images
- Place project screenshots or mockups here
- Recommended naming: `project-1.jpg`, `project-2.jpg`, etc.
- Recommended size: 800x600 pixels or similar aspect ratio
- Supported formats: JPG, PNG, WebP

## Usage
After adding your images, update the image paths in the components:
- For profile photo: Update the `src` attribute in `Home.jsx`
- For project images: Update the `image` property in the projects array in `Projects.jsx`

## Example
```jsx
// In Home.jsx
<img src="/src/assets/images/profile.jpg" alt="Your Name" />

// In Projects.jsx
{
  id: 1,
  title: "Project Name",
  image: "/src/assets/images/project-1.jpg",
  // ... other properties
}
``` 