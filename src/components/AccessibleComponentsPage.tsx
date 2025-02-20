import React from 'react';
import Image from 'next/image';

const AccessibleComponentsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white">CSCI 1300 - Accessible Components</h1>
       </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Analysis Tables Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Input Analysis</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Application</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Mouse/Touchpad</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Keyboard Navigation</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Touch (if available)</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Functionality & Limitations</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Learnability & Efficiency</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Accessibility (Focus Order & Screen Readers)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Placeholder for input analysis table content */}
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900">Discord</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Click 'OK' or 'Cancel' with the mouse; Right-click options available; Cannot reposition the dialog.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Tab navigates between buttons; Enter confirms selection; Esc closes the dialog; No shortcuts for quick access.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Tap on buttons; No swipe gestures supported; May not be optimized for mobile.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Buttons can be selected, but no drag-and-drop support; Esc closes without confirmation.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Easy to learn but lacks efficiency for power users; No quick keyboard shortcuts.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Focus order is logical but lacks screen reader cues; No high contrast support.</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900">Photoshop</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Click 'Yes', 'No', or 'Cancel' with mouse; Can drag the window; Some dialogs have additional options.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Tab navigates; Enter confirms; Esc cancels; Some dialogs support Ctrl+S for saving.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Tap on buttons; No gesture controls available; Some dialogs may be too small on touchscreens.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Text cannot be copied; Dialogs sometimes allow saving directly with shortcuts.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Moderate learnability; Frequent users remember shortcuts like Ctrl+S.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Well-structured focus order; Screen reader announces labels, but lacks descriptions.</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900">Microsoft Word</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Click 'OK', 'Cancel', or other options with mouse; Can reposition dialogs; Right-click context menus available.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Tab navigates between fields; Enter confirms; Esc cancels; Supports keyboard shortcuts (Ctrl+S for save, Alt+key combinations).</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Tap buttons and fields; Supports basic touch gestures; Optimized for tablets with touch mode.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Rich text formatting; Robust dialog options; Context-sensitive help; Supports file autosaving.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">High learnability with ribbon interface; Efficient for power users with customizable shortcuts.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Strong accessibility features; Logical focus order; Screen reader announcements; High contrast support.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-gray-800 mb-6">Application Dialog Examples</h3>
                
              <div className="mb-8">
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Desktop UI</h4>
                <div className="grid md:grid-cols-2 gap-6"></div>  
                {/* Photoshop */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Adobe Photoshop Save Dialog</h4>
                  <div className="flex justify-center">
                    <Image 
                      src="/images/Picture1.png"
                      alt="Photoshop save changes dialog with Save, Don't Save, and Cancel options"
                      width={800}
                      height={450}
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Microsoft Word Save Dialog</h4>
                  <div className="flex justify-center">
                    <Image 
                      src="/images/Picture2.png"
                      alt="Microsoft Word save changes dialog with Save, Don't Save, and Cancel options"
                      width={800}
                      height={450}
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Discord Delete Message Dialog</h4>
                  <div className="flex justify-center">
                    <Image 
                      src="/images/Picture5.png"
                      alt="Discord delete message confirmation dialog with Yes and No options"
                      width={800}
                      height={450}
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Mobile UI</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Discord Delete Message Dialog</h4>
                    <div className="flex justify-center">
                      <div className="w-1/2">
                        <Image 
                          src="/images/Picture3.png"
                          alt="Discord mobile delete message confirmation dialog with Yes and No options"
                          width={400}
                          height={600}
                          className="rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Word Mobile Delete Dialog</h4>
                    <div className="flex justify-center">
                      <div className="w-1/2">
                        <Image 
                          src="/images/Picture4.png"
                          alt="OneDrive mobile delete confirmation dialog with YES and NO options"
                          width={400}
                          height={600}
                          className="rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>
                  </div>               
                </div>
              </div>
            </div>   

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Output Analysis</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Application</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Visual Cues</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Text & Labels</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Focus Order</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900">Screen Reader Support</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Placeholder for output analysis table content */}
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900">Discord</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Popup background darkens; Buttons change color on hover; Borders highlight focus.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Clear text labels for 'Cancel' and 'OK'; No additional descriptions.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Logical order: Starts at the message, then moves to buttons with Tab.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Reads button labels but lacks additional descriptions; No role announcements.</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900">Photoshop</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Dialog has drop shadow; Buttons highlight on hover; No background dimming.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Includes full sentences like 'Do you want to save changes?'; Buttons labeled clearly.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Well-structured: Starts at the message, then moves through buttons logically.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Good screen reader support; Announces full text and buttons with context.</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900">Microsoft Word</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Dialog uses Office theme styling; Background dimming effect; Visual indicators for selection focus.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Descriptive button labels; Contextual explanations; Error messages with suggested fixes.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Structured focus order: Moves from content to primary action buttons in logical sequence.</td>
                    <td className="p-3 border border-gray-200 text-gray-900">Comprehensive screen reader support; ARIA labels; Role announcements; Keyboard navigation cues.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* State Models Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">State Models</h2>
          <div className="space-y-8">
            {/* Initial State Models */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Initial State Models</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Initial Mouse User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image
                      src="/images/initial-mouse.jpg" 
                      alt="Initial mouse user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Initial Keyboard User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image 
                      src="/images/initial-keyboard.jpg"
                      alt="Initial keyboard user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Revised State Models */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Revised State Models</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Revised Mouse User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image 
                      src="/images/revised-mouse.jpg"
                      alt="Revised mouse user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Revised Keyboard User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image 
                      src="/images/revised-keyboard.jpg"
                      alt="Revised keyboard user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Figma Designs Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Component Redesign</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Initial State</h3>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                <Image 
                  src="/images/Destructive Dialog Design.png"
                  alt="Initial state Figma design"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg border border-gray-200"
                />
              </div>
              <p className="text-gray-700 mt-4">
                Basic confirmation dialog with standard button layout and clear warning message. Keyboard shortcuts (C) are visible to support both mouse and keyboard users.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Hover State</h3>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                <Image
                  src="/images/Destructive Dialog After1.png"
                  alt="Hover state Figma design"
                  width={800}
                  height={600} 
                  className="object-cover rounded-lg border border-gray-200"
                />
              </div>
              <p className="text-gray-700 mt-4">
                Enhanced warning state with double-click requirement for destructive actions. High-contrast warning banner and icon improve visibility and emphasize importance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Confirmation State</h3>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                <Image 
                  src="/images/Destructive Dialog After2.png"
                  alt="Initial state Figma design"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg border border-gray-200"
                />
              </div>
              <p className="text-gray-700 mt-4">
                Clear action button labeling with "(Click Again)" instruction promotes user confidence. Red button color reinforces destructive nature while maintaining accessibility.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reflection</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-4 text-gray-600">
                <li>
                  <strong>Component Strengths:</strong> Microsoft Word demonstrated excellent accessibility with comprehensive keyboard navigation and screen reader support. I've applied this in my design through clear focus indicators and ARIA labels, while also maintaining Discord's simplicity in visual presentation.
                </li>
                
                <li>
                  <strong>Addressing Gaps:</strong> While existing applications handle basic interactions well, they often lack clear feedback for destructive actions. My design introduces enhanced warning states and confirmation dialogs, particularly benefiting users with cognitive impairments or anxiety about irreversible actions.
                </li>
                
                <li>
                  <strong>Mismatch Solution:</strong> My design addresses fundamental mismatches between human capabilities and interface requirements: motor control mismatches through larger hit areas and multiple interaction methods, cognitive mismatches through clear warning states for destructive actions, and perception mismatches by providing both visual and auditory feedback. This aligns with Holmes' definition of disability as a mismatch between human features and environmental design, turning potential barriers into inclusive interaction opportunities.
                </li>
                
                <li>
                  <strong>Inclusive Design Evolution:</strong> My solution reflects Holmes' principle that inclusive design often originates from solving specific mismatches, similar to how the typewriter emerged from making writing accessible to the blind. By starting with critical user needs (preventing accidental destructive actions) and incorporating multi-modal feedback (visual, keyboard, and screen reader cues), the design creates a more robust solution that benefits all users. Like Holmes' examples of the typewriter and automated captioning, this design demonstrates how addressing accessibility "mismatches" leads to better overall user experiences rather than just accommodating specific disabilities.
                </li>

                <li>
                  <strong>Impact Examples:</strong>
                  - Discord's lack of dialog repositioning negatively impacts users with motor impairments who might need to move dialogs to see context behind them
                  - Microsoft Word's high-contrast support and keyboard shortcuts positively impact users with visual impairments by providing multiple ways to interact
                </li>
                
                <li>
                  <strong>User Prioritization:</strong> Mouse users are typically prioritized in component design, followed by keyboard users, with touch and screen reader users often considered last. This prioritization can lead to suboptimal experiences for users relying on assistive technologies, necessitating workarounds or accepting limited functionality.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 py-6"></div>
      </footer>
    </div>
  );
};

export default AccessibleComponentsPage;