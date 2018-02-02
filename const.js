// define html template and api loc with underscore func.
let buttonTemplate = _.template(`<button class="Select-option" tabindex="-1" role="option"><%= buttonText %></button>`)

let answerApi = _.template('https://www.zhihu.com/api/v4/questions/<%= questionId %>/answers?sort_by=default&include=data%5B%2A%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cupvoted_followees%3Bdata%5B%2A%5D.mark_infos%5B%2A%5D.url%3Bdata%5B%2A%5D.author.follower_count%2Cbadge%5B%3F%28type%3Dbest_answerer%29%5D.topics&limit=20&offset=<%= offset %>')

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
            <span data-tooltip="发布于 <% print(zhihuPublishTimeFormat(timestamp)) %>">
              <!-- react-text: 887 -->编辑于
              <!-- /react-text -->
              <!-- react-text: 888 --><% print(zhihuPublishTimeFormat(timestamp)) %>
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
            <!-- react-text: 1061 --><% print(zhihuVoteupButtonNumberFormat(voteUpCount)) %>
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

let a = _.template(`<div class="List-item" data-reactid="215">
  <div class="ContentItem AnswerItem" data-za-index="0" data-zop="{&quot;authorName&quot;:&quot;苏亮&quot;,&quot;itemId&quot;:110739564,&quot;title&quot;:&quot;程序员的成长离不开哪些软技能？&quot;,&quot;type&quot;:&quot;answer&quot;}" name="110739564" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer" itemscope="" data-reactid="216" data-za-detail-view-path-module="AnswerItem" data-za-extra-module="{&quot;card&quot;:{&quot;has_image&quot;:false,&quot;has_video&quot;:false,&quot;content&quot;:{&quot;type&quot;:&quot;Answer&quot;,&quot;token&quot;:&quot;110739564&quot;,&quot;upvote_num&quot;:1073,&quot;comment_num&quot;:110,&quot;publish_timestamp&quot;:null,&quot;parent_token&quot;:&quot;48406009&quot;,&quot;author_member_hash_id&quot;:&quot;aa470e33dc1db2877185401e45c50c42&quot;}}}">
    <div class="ContentItem-meta" data-reactid="217">
      <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related" itemprop="author" itemscope="" itemtype="http://schema.org/Person" data-reactid="218">
        <meta itemprop="name" content="苏亮" data-reactid="219">
        <meta itemprop="image" content="https://pic3.zhimg.com/2b947e4ba9f4fadc9bc521e33321f87b_is.jpg" data-reactid="220">
        <meta itemprop="url" content="https://www.zhihu.com/people/su-liang" data-reactid="221">
        <meta itemprop="zhihu:followerCount" content="344" data-reactid="222">
        <span class="UserLink AuthorInfo-avatarWrapper" data-reactid="223">
          <div class="Popover" data-reactid="224">
            <div id="Popover-76156-46599-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-76156-46599-content" data-reactid="225">
              <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/su-liang" data-reactid="226">
                <img class="Avatar AuthorInfo-avatar" width="38" height="38" src="https://pic3.zhimg.com/2b947e4ba9f4fadc9bc521e33321f87b_xs.jpg" srcset="https://pic3.zhimg.com/2b947e4ba9f4fadc9bc521e33321f87b_l.jpg 2x" alt="苏亮" data-reactid="227"></a>
            </div>
            <!-- react-empty: 228 --></div>
        </span>
        <div class="AuthorInfo-content" data-reactid="229">
          <div class="AuthorInfo-head" data-reactid="230">
            <span class="UserLink AuthorInfo-name" data-reactid="231">
              <div class="Popover" data-reactid="232">
                <div id="Popover-76156-23689-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-76156-23689-content" data-reactid="233">
                  <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/su-liang" data-reactid="234">苏亮</a></div>
                <!-- react-empty: 235 --></div>
              <!-- react-empty: 236 --></span>
          </div>
          <div class="AuthorInfo-detail" data-reactid="237">
            <div class="AuthorInfo-badge" data-reactid="238">
              <div class="RichText AuthorInfo-badgeText" data-reactid="239">鸡蛋糕跟你嘴角果酱我都想要尝</div></div>
          </div>
        </div>
      </div>
      <div class="AnswerItem-extraInfo" data-reactid="240">
        <span class="Voters" data-reactid="241">
          <span data-reactid="242">
            <span class="UserLink" data-reactid="243">
              <div class="Popover" data-reactid="244">
                <div id="Popover-76156-86454-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-76156-86454-content" data-reactid="245">
                  <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/dodoru" data-reactid="246">迦伦</a></div>
                <!-- react-empty: 247 --></div>
            </span>
            <!-- react-text: 248 -->、
            <!-- /react-text --></span>
          <span data-reactid="249">
            <span class="UserLink" data-reactid="250">
              <div class="Popover" data-reactid="251">
                <div id="Popover-76156-97009-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-76156-97009-content" data-reactid="252">
                  <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" href="//www.zhihu.com/people/minmin.gong" data-reactid="253">叛逆者</a></div>
                <!-- react-empty: 254 --></div>
            </span>
            <!-- react-text: 255 -->
            <!-- /react-text --></span>
          <!-- react-text: 256 -->等
          <!-- /react-text -->
          <button class="Button Button--plain" type="button" data-reactid="257">
            <!-- react-text: 258 -->1,073 人赞同了该回答
            <!-- /react-text --></button>
          <!-- react-empty: 259 --></span>
      </div>
    </div>
    <meta itemprop="image" content="https://pic4.zhimg.com/6edd0d8e130e4901e0fd58b2d72cbb7d_200x112.jpg" data-reactid="260">
    <meta itemprop="upvoteCount" content="1073" data-reactid="261">
    <meta itemprop="url" content="https://www.zhihu.com/question/48406009/answer/110739564" data-reactid="262">
    <meta itemprop="dateCreated" content="2016-07-12T09:33:04.000Z" data-reactid="263">
    <meta itemprop="dateModified" content="2016-07-13T01:20:12.000Z" data-reactid="264">
    <meta itemprop="commentCount" content="110" data-reactid="265">
    <div class="RichContent RichContent--unescapable" data-reactid="266">
      <div class="RichContent-inner">
        <span class="RichText CopyrightRichText-richText" itemprop="text">
          <p>
            <b>自学能力！</b>
            <br>这个真的很重要，行业在飞速发展，不可能一直靠着学校教的东西来吃老本的。不要以为给本书，给个文档，是个程序员就能学会一门新技能。事实上人和人的差别真的很大，我见过自学能力惊人的人为了看懂日剧日漫自学日语达到可以和日本人交流的程度，也见过很多连HTML+CSS入门都要别人一口一口喂的。</p>
          <p>为了时刻跟上行业的发展速度，保证自己不被淘汰，我也一直在努力提高自己的学习能力。</p>
          <p>我理解的自学能力分这几点：</p>
          <p>首先是学习内容的选择能力，就web前端开发而言，每年甚至每个月都有新东西出来。这就涉及到一个选择性学习的问题，你不能今天搞一下angular，明天又去弄一弄vue，要弄清楚自己学习的真正目的。比如我们公司就会有涉及到不同的产品线，有的人负责PC端的ERP应用开发，有大量的数据处理和DOM操作，面对产品那边不断过来的新需求，会有大量的可复用组件需要封装。所以负责这一块的同事更多的是学习jQuery和类似库的操作已经PC各浏览器的兼容性和性能。同时还有hybrid APP的产品在开发，负责这一块的同事就天天抱着一堆手机在弄，平时研究得更多的就是移动端的一些技术了。所以有时候别看大家都在做前端，其实有时候做的事情差别还蛮大的。家里还有老婆孩子等着去照顾，我们有时候真的没有那么多精力去学会这个行业的所有的东西，找准自己的兴趣点和方向很重要。</p>
          <p>其次是学习的速度和质量平衡。去一家新公司或者介入一个新产品的开发，很可能会碰到之前从来没接触过的技术，这就是考验我们能不能在很短的时间内迅速上手。我们在学校学习的时候可以捧着各种“权威指南”慢慢啃，但是工作中很多时候压根就没太多时间去学习。我的做法是在了解之后迅速看各种实例以及公司现在的相关源代码，争取让自己感觉能上手干活，然后再慢慢去研究里面的一些细枝末节的东西。</p>
          <p>我在学习的时候发现很多时候我学过的知识点很容易过一段时间就忘记。比如JavaScript中的面向对象这一块，我最开始学习的时候只是捧着高程使劲看，跟着书里面的思路去理解，发现其实挺简单。但是过段时间又忘记该怎么开始了，反复循环了几次之后，我用了一个很笨的方法，那就是对着书使劲敲。边理解边敲，发现其实很多地方自己记忆有盲点，记得并不是很牢固。这里我主要用了两本书，一本是《JavaScript高级程序设计》，一本是《JavaScript面向对象编程指南》。在确保自己对书上的各种封装继承实例烂熟于心之后开始去github上找相对应难度的实例去看，这样在看了很多对面向对象的直接应用方法之后慢慢有了更深刻的理解。</p>说一句题外话，我从开始学习敲代码的时候就喜欢对着书上的代码使劲敲，多敲几遍真的很能巩固自己的记忆和理解。但是有时候觉得厚厚的书拿在手上很不方便，所以去淘了一件神器，夹住书立在我电脑旁边，觉得还蛮不错的。
          <br>
          <figure>
            <noscript>&amp;lt;img src="https://pic4.zhimg.com/50/6edd0d8e130e4901e0fd58b2d72cbb7d_hd.jpg" data-rawwidth="371" data-rawheight="242" class="content_image" width="371"&amp;gt;</noscript>
            <img src="https://pic4.zhimg.com/80/6edd0d8e130e4901e0fd58b2d72cbb7d_hd.jpg" data-rawwidth="371" data-rawheight="242" class="content_image lazy" width="371" data-actualsrc="https://pic4.zhimg.com/50/6edd0d8e130e4901e0fd58b2d72cbb7d_hd.jpg"></figure>
          <br>注：大家去某宝搜索“夹书”，“书夹子”之类的关键字，找自己喜欢的款式喜欢的价格就行啦，很好找的，这里就不打广告了，嘿嘿。</span>
        <!-- react-empty: 3127 --></div>
      <div>
        <div class="ContentItem-time">
          <a target="_blank" href="/question/48406009/answer/110739564">
            <span data-tooltip="发布于 2016-07-12">
              <!-- react-text: 3132 -->编辑于
              <!-- /react-text -->
              <!-- react-text: 3133 -->2016-07-13
              <!-- /react-text --></span></a>
        </div>
        <!-- react-empty: 3134 --></div>
      <div class="ContentItem-actions RichContent-actions">
        <span>
          <button class="Button VoteButton VoteButton--up" aria-label="赞同" type="button">
            <svg viewBox="0 0 20 18" class="Icon VoteButton-upIcon Icon--triangle" width="9" height="16" aria-hidden="true" style="height: 16px; width: 9px;">
              <title></title>
              <g>
                <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
              </g>
            </svg>
            <!-- react-text: 3197 -->1.1K
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
            <!-- react-text: 3204 -->​
            <!-- /react-text -->
            <svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
          </span>
          <!-- react-text: 3207 -->110 条评论
          <!-- /react-text --></button>
        <div class="Popover ShareMenu ContentItem-action">
          <div class="" id="Popover-2254-1397-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-2254-1397-content">
            <button class="Button Button--plain Button--withIcon Button--withLabel" type="button">
              <span style="display: inline-flex; align-items: center;">
                <!-- react-text: 3212 -->​
                <!-- /react-text -->
                <svg class="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
              </span>
              <!-- react-text: 3215 -->分享
              <!-- /react-text --></button></div>
          <!-- react-empty: 3216 --></div>
        <button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button">
          <span style="display: inline-flex; align-items: center;">
            <!-- react-text: 3219 -->​
            <!-- /react-text -->
            <svg class="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
          </span>
          <!-- react-text: 3222 -->收藏
          <!-- /react-text --></button>
        <button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button">
          <span style="display: inline-flex; align-items: center;">
            <!-- react-text: 3225 -->​
            <!-- /react-text -->
            <svg class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
          </span>
          <!-- react-text: 3228 -->感谢
          <!-- /react-text --></button>
        <div class="Popover ContentItem-action">
          <button class="Button Button--plain Button--withIcon Button--iconOnly" aria-label="更多" type="button" id="Popover-2254-9977-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-2254-9977-content">
            <span style="display: inline-flex; align-items: center;">
              <!-- react-text: 3232 -->​
              <!-- /react-text -->
              <svg class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path></svg>
            </span>
          </button>
          <!-- react-empty: 3235 --></div>
        <button class="Button ContentItem-action ContentItem-rightButton Button--plain" data-zop-retract-question="true" type="button">
          <span class="RichContent-collapsedText">收起</span>
          <svg viewBox="0 0 10 6" class="Icon ContentItem-arrowIcon is-active Icon--arrow" width="10" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
            <title></title>
            <g>
              <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <!-- react-empty: 327 -->
    <!-- react-empty: 780 -->
    <!-- react-empty: 329 -->
    <!-- react-empty: 330 -->
    <!-- react-empty: 781 -->
    <!-- react-empty: 332 --></div>
</div>`)

// var img = "<img src="https://pic4.zhimg.com/50/6edd0d8e130e4901e0fd58b2d72cbb7d_hd.jpg" data-rawwidth="371" data-rawheight="242" class="content_image" width="371"></noscript><img src="data:image/svg+xml;utf8,&lt;svg%20xmlns='http://www.w3.org/2000/svg'%20width='371'%20height='242'&gt;&lt;/svg&gt;" data-rawwidth="371" data-rawheight="242" class="content_image lazy" width="371" data-actualsrc="https://pic4.zhimg.com/50/6edd0d8e130e4901e0fd58b2d72cbb7d_hd.jpg"></figure><br>注：大家去某宝搜索“夹书”，“书夹子”之类的关键字，找自己喜欢的款式喜欢的价格就行啦，很好找的，这里就不打广告了，嘿嘿。"