import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large-scale React applications using TypeScript, focusing on maintainability and developer experience.",
      content: "In this comprehensive guide, we'll explore advanced patterns for building scalable React applications...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true,
    },
    {
      id: 2,
      title: "The Future of Web Development: AI and Automation",
      excerpt: "Exploring how artificial intelligence is reshaping the development landscape and what it means for developers.",
      content: "Artificial intelligence is transforming how we approach web development...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      category: "AI",
      tags: ["AI", "Web Development", "Future Tech"],
      featured: false,
    },
    {
      id: 3,
      title: "Optimizing Performance in Modern Web Applications",
      excerpt: "Deep dive into performance optimization techniques that can make your web applications lightning fast.",
      content: "Performance optimization is crucial for user experience and SEO...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Vitals"],
      featured: false,
    },
    {
      id: 4,
      title: "Design Systems: Building Consistent User Interfaces",
      excerpt: "How to create and maintain design systems that scale across teams and products.",
      content: "Design systems are the foundation of consistent user experiences...",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      publishDate: "2023-12-28",
      readTime: "7 min read",
      category: "Design",
      tags: ["Design Systems", "UI/UX", "Components"],
      featured: false,
    },
  ];

  const categories = ["All", "React", "AI", "Performance", "Design"];
  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on technology, development practices, and industry trends.
            I share what I learn to help other developers grow their skills.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 animate-slide-up">
            <Card className="shadow-medium hover-lift transition-smooth overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-medium">
                      Featured
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-3">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-playfair font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="bg-gradient-primary hover:opacity-90 transition-smooth self-start">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="hover-lift transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="shadow-soft hover-lift transition-smooth overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-playfair leading-tight line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between p-0 h-auto text-primary hover:text-primary-light transition-fast"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto shadow-medium bg-gradient-subtle">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest articles and insights delivered directly to your inbox.
                No spam, unsubscribe at any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-fast"
                />
                <Button className="bg-gradient-accent hover:opacity-90 transition-smooth">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Join 500+ developers who get weekly insights on modern web development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;