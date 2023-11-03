import React from 'react'

import me from '../../content/images/avatar.png'

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <img src={me} alt="Shashank" />
      </div>
    </aside>
  )
}
