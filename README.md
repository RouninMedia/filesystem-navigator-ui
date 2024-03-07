# Filesystem Navigator UI
An interactive Filesystem Navigator UI for web pages.

## HTML
```html
<dialog class="selectTextFileModal">
  <header class="selectTextFileModalHeader">
    <h2 class="selectTextFileModalHeading">Select a Text File</h2>
  </header>  
  <div class="selectTextFileModalMain"> 
    <ul class="webDirectory --open">
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName"># Ready Write Web</span>
        <ul class="webDirectory">
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName"># hacktohacker</span>
            <ul class="webDirectory">
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">hack-to-hacker_apps</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">nimish</span>
                    <ul class="webDirectory">
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">nim-articles-and-links.txt</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">nimish-notes.txt</span></li>
                    </ul>
                  </li>
                  <li class="webDirectoryFolder"><span class="webDirectoryFolderName">wordish</span>
                    <ul class="webDirectory">
                      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">svg</span>
                        <ul class="webDirectory">
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">backspace-icon.svg</span></li>
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">vibrate-off.svg</span></li>
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">vibrate.svg</span></li>
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">wordis3h-favicon.svg</span></li>
                        </ul>
                      </li>
                      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">ura</span>
                        <ul class="webDirectory">
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">index-for-ura.html</span></li>
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">index-min-for-ura.html</span></li>
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">index.txt</span></li>
                          <li class="webDirectoryFile"><span class="webDirectoryFileName">wordish-as-data-url.txt</span></li>
                        </ul>
                      </li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">index.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">intro.txt</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">plan-of-action.html</span></li>
                      <li class="webDirectoryFile"><span class="webDirectoryFileName">word-list.php</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="webDirectoryFile"><span class="webDirectoryFileName">.hack-to-hacker_htaccess</span></li>
              <li class="webDirectoryFile"><span class="webDirectoryFileName">fruitbowl.txt</span></li>
              <li class="webDirectoryFile"><span class="webDirectoryFileName">hack-to-hacker_index.html</span></li>
              <li class="webDirectoryFile"><span class="webDirectoryFileName">hack-to-hacker_references.txt</span></li>
              <li class="webDirectoryFile"><span class="webDirectoryFileName">todolist.txt</span></li>
              <li class="webDirectoryFile"><span class="webDirectoryFileName">winner-1.jpg</span></li>
              <li class="webDirectoryFile"><span class="webDirectoryFileName">winner-2.jpg</span></li>
            </ul>
          </li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">index-page.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">readywriteweb--architecture.txt</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">readywriteweb--links.txt</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">readywriteweb-as-data-url.txt</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">readywriteweb-notes.txt</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">toot-list.txt</span></li>
        </ul>
      </li>
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">..ashiva-installer</span>
        <ul class="webDirectory">
          <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
        </ul>
      </li>
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">apps</span>
        <ul class="webDirectory">
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">ashiva</span>
            <ul class="webDirectory">
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">broadcaster</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">index.html</span></li>
                </ul>
              </li>
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">hackpad</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
                </ul>
              </li>
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">icon-generator</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
                </ul>
              </li>
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">initialiser</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
                </ul>
              </li>
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">json-builder</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
                </ul>
              </li>
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">remote-note</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">projects</span>
            <ul class="webDirectory"></ul>
          </li>
          <li class="webDirectoryFolder"><span class="webDirectoryFolderName">tools</span>
            <ul class="webDirectory">
              <li class="webDirectoryFolder"><span class="webDirectoryFolderName">remote-note</span>
                <ul class="webDirectory">
                  <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">canvas</span>
        <ul class="webDirectory">
          <li class="webDirectoryFile"><span class="webDirectoryFileName">canvas.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">index.html</span></li>
        </ul>
      </li>
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">labs</span>
        <ul class="webDirectory"></ul>
      </li>
      <li class="webDirectoryFolder"><span class="webDirectoryFolderName">lindley-community-group</span>
        <ul class="webDirectory">
          <li class="webDirectoryFile"><span class="webDirectoryFileName">2023-lindley-carnival-plan.png</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">2023-lindley-programme-draft-19.pdf</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">OLD_index.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">index.html</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">lcg.woff</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">lcg.woff2</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">lindley-2024-junior-run-entry-form.pdf</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">lindley-2024-sponsorship-and-stall-booking-form.pdf</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">lindley-carnival-logo.png</span></li>
          <li class="webDirectoryFile"><span class="webDirectoryFileName">lindley-community-group-screenshot.png</span></li>
        </ul>
      </li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">favicon.ico</span></li>
      <li class="webDirectoryFile"><span class="webDirectoryFileName">index.php</span></li>
    </ul>
  </div>

  <footer class="selectTextFileModalFooter">
    <form class="selectTextFileModalForm">
      <button type="submit" class="selectTextFileModalFormButton" formmethod="dialog">Close without selecting a Text File</button>
    </form>
  <footer>
</dialog>
```

## CSS
```css
```

## JS
```js
```
