let answerTemplate = _.template(`<div class="List-item">
  <div class="ContentItem AnswerItem" data-za-index="0" data-zop="{&quot;authorName&quot;:&quot;<%= authorName %>&quot;,&quot;itemId&quot;:306255466,&quot;title&quot;:&quot;经常看到美国人发短信的截图，他们没有社交软件么？&quot;,&quot;type&quot;:&quot;answer&quot;}" name="306255466" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer" itemscope="" data-za-detail-view-path-module="AnswerItem" data-za-extra-module="{&quot;card&quot;:{&quot;has_image&quot;:false,&quot;has_video&quot;:false,&quot;content&quot;:{&quot;type&quot;:&quot;Answer&quot;,&quot;token&quot;:&quot;306255466&quot;,&quot;upvote_num&quot;:<%= voteUpCount %>,&quot;comment_num&quot;:62,&quot;publish_timestamp&quot;:null,&quot;parent_token&quot;:&quot;266177916&quot;,&quot;author_member_hash_id&quot;:&quot;0970f947b898ecc0ec035f9126dd4e08&quot;}}}">
    <div class="ContentItem-meta">
      <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
        <meta itemprop="name" content="<%= authorName %>">
        <meta itemprop="image" content="https://pic3.zhimg.com/v2-1bea18837914ab5a40537d515ed3219c_is.jpg">
        <meta itemprop="url" content="https://www.zhihu.com/people/excited-<%= authorName %>">
        <meta itemprop="zhihu:followerCount" content="658239">
        <span class="UserLink AuthorInfo-avatarWrapper">
          <div class="Popover">
            <div id="Popover-46584-13160-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46584-13160-content">
              <a class="UserLink-link" data-za-detail-view-element_name="User" href="/people/excited-<%= authorName %>">
                <img class="Avatar AuthorInfo-avatar" width="38" height="38" src="<%= authorAvatarUrl %>" srcset="<%= authorAvatarUrl %>" alt="<%= authorName %>"></a>
            </div>
            <!-- react-empty: 856 --></div>
        </span>
        <div class="AuthorInfo-content">
          <div class="AuthorInfo-head">
            <span class="UserLink AuthorInfo-name">
              <div class="Popover">
                <div id="Popover-46584-49969-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46584-49969-content">
                  <a class="UserLink-link" data-za-detail-view-element_name="User" href="/people/excited-<%= authorName %>"><%= authorName %></a></div>
                <!-- react-empty: 863 --></div>
              <!-- react-empty: 864 --></span>
          </div>
          <div class="AuthorInfo-detail">
            <div class="AuthorInfo-badge">
              <div class="RichText AuthorInfo-badgeText"><%= authorHeadline %></div>
            </div>
          </div>
        </div>
      </div>
      <div class="AnswerItem-extraInfo">
        <span class="Voters">
          <button class="Button Button--plain" type="button">
            <!-- react-text: 871 --><%= voteUpCount %> 人赞同了该回答
            <!-- /react-text --></button>
          <!-- react-empty: 872 --></span>
      </div>
    </div>
    <meta itemprop="image" content="">
    <meta itemprop="upvoteCount" content="<%= voteUpCount %>">
    <meta itemprop="url" content="https://www.zhihu.com/question/266177916/answer/306255466">
    <meta itemprop="dateCreated" content="2018-01-29T02:30:33.000Z">
    <meta itemprop="dateModified" content="2018-01-29T02:30:34.000Z">
    <meta itemprop="commentCount" content="62">
    <div class="RichContent RichContent--unescapable">
      <div class="RichContent-inner">
        <span class="RichText CopyrightRichText-richText" itemprop="text"><%= richTextAnswer %></span>
        <!-- react-empty: 1054 --></div>
      <div>
        <div class="ContentItem-time">
          <a target="_blank" href="/question/266177916/answer/306255466">
            <span data-tooltip="发布于 10:30">
              <!-- react-text: 887 -->编辑于
              <!-- /react-text -->
              <!-- react-text: 888 -->10:30
              <!-- /react-text --></span></a>
        </div>
        <!-- react-empty: 889 --></div>
      <div class="ContentItem-actions">
        <span>
          <button class="Button VoteButton VoteButton--up" aria-label="赞同" type="button">
            <svg viewBox="0 0 20 18" class="Icon VoteButton-upIcon Icon--triangle" width="9" height="16" aria-hidden="true" style="height: 16px; width: 9px;">
              <title></title>
              <g>
                <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
              </g>
            </svg>
            <!-- react-text: 1061 --><%= voteUpCount %>
            <!-- /react-text --></button>
          <button class="Button VoteButton VoteButton--down" aria-label="反对" type="button">
            <svg viewBox="0 0 20 18" class="Icon VoteButton-downIcon Icon--triangle" width="9" height="16" aria-hidden="true" style="height: 16px; width: 9px;">
              <title></title>
              <g>
                <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
              </g>
            </svg>
          </button>
        </span>
        <button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button">
          <span style="display: inline-flex; align-items: center;">
            <!-- react-text: 1068 -->​
            <!-- /react-text -->
            <svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
          </span>
          <!-- react-text: 1071 --><%= commentCount %> 条评论
          <!-- /react-text --></button>
        <div class="Popover ShareMenu ContentItem-action">
          <div class="" id="Popover-46639-52633-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46639-52633-content">
            <button class="Button Button--plain Button--withIcon Button--withLabel" type="button">
              <span style="display: inline-flex; align-items: center;">
                <!-- react-text: 1076 -->​
                <!-- /react-text -->
                <svg class="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
              </span>
              <!-- react-text: 1079 -->分享
              <!-- /react-text --></button></div>
          <!-- react-empty: 1080 --></div>
        <button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button">
          <span style="display: inline-flex; align-items: center;">
            <!-- react-text: 1083 -->​
            <!-- /react-text -->
            <svg class="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
          </span>
          <!-- react-text: 1086 -->收藏
          <!-- /react-text --></button>
        <button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button">
          <span style="display: inline-flex; align-items: center;">
            <!-- react-text: 1089 -->​
            <!-- /react-text -->
            <svg class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
          </span>
          <!-- react-text: 1092 -->感谢
          <!-- /react-text --></button>
        <div class="Popover ContentItem-action">
          <button class="Button Button--plain Button--withIcon Button--iconOnly" aria-label="更多" type="button" id="Popover-46639-6398-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-46639-6398-content">
            <span style="display: inline-flex; align-items: center;">
              <!-- react-text: 1096 -->​
              <!-- /react-text -->
              <svg class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path></svg>
            </span>
          </button>
          <!-- react-empty: 1099 --></div>
      </div>
    </div>
    <!-- react-empty: 940 -->
    <!-- react-empty: 1443 -->
    <!-- react-empty: 942 -->
    <!-- react-empty: 943 -->
    <!-- react-empty: 1444 -->
    <!-- react-empty: 945 --></div>
</div>`)
