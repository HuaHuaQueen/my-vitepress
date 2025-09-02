---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/147383967?v=4',
    name: 'HuaHuaQueen',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/HuaHuaQueen' },
    ]
  }
]
</script>

<VPTeamPage style="margin-top: 0">
  <VPTeamPageTitle>
    <template #title>
      Team
    </template>
    <template #lead>
        A HuaHuaQueen VitePress Site
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>