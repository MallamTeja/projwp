# TODO: Remove Preview Section from Landing Page

## Steps to Complete
- [x] Edit src/components/LandingPage.jsx to remove the import of PreviewSection
- [x] Edit src/components/LandingPage.jsx to remove the <PreviewSection /> component from the JSX
- [ ] Verify the changes by checking the landing page renders without the preview section

## Information Gathered
- The text "Preview: Roadmap & Full-Stack Technologies" is located in the PreviewSection component (src/components/PreviewSection.jsx).
- The PreviewSection is imported and rendered in the LandingPage component (src/components/LandingPage.jsx).
- To remove the text from the landing page, the PreviewSection component needs to be removed from LandingPage.jsx.

## Plan
- Remove the import statement for PreviewSection from LandingPage.jsx.
- Remove the <PreviewSection /> JSX element from the landing page render.
- This will eliminate the entire preview section, including the title, description, and listed technologies.

## Dependent Files
- src/components/LandingPage.jsx

## Followup Steps
- Run the application and navigate to the landing page to confirm the preview section is no longer displayed.
- Ensure no errors occur due to the removal.
